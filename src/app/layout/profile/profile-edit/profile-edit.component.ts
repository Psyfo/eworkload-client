import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
    Discipline,
    FormalInstructionWorkloadPerUser,
    Position,
    User,
    UserInput,
    WorkFocus
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { WorkloadService, UploadService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormalInstructionService } from '../../activity/formal-instruction/formal-instruction.service';
import { DisciplineService } from '../../admin/discipline/discipline.service';
import { PositionService } from '../../admin/position/position.service';
import { UserService } from '../../admin/user/user.service';
import { WorkFocusService } from '../../admin/work-focus/work-focus.service';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],
    animations: [routerTransition()]
})
export class ProfileEditComponent implements OnInit {
    breadcrumbs: MenuItem[];
    genders = this.userService.genders;
    nationalities = this.userService.nationalities;

    userInput: UserInput = {};
    user: User;
    selectedDiscipline: Discipline;
    disciplines: Discipline[];
    selectedPosition: Position;
    positions: Position[];
    selectedWorkFocus: WorkFocus;
    workFocuses: WorkFocus[];
    selectedFile: File[];

    formalInstructionWorkload: FormalInstructionWorkloadPerUser;
    fiChartData: any;

    private unsubscribe = new Subject();

    profileEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private userService: UserService,
        private disciplineService: DisciplineService,
        private positionService: PositionService,
        private workFocusService: WorkFocusService,
        private formalInstructionActivityService: FormalInstructionService,
        private workloadService: WorkloadService,
        private uploadService: UploadService
    ) {}

    ngOnInit() {
        this.getDisciplines();
        this.getPositions();
        this.getWorkFocuses();
        this.buildForm();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    public buildForm() {
        // Build form
        this.profileEditForm = this.fb.group({
            userId: [{ value: '', disabled: true }, Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            discipline: ['', Validators.required],
            position: ['', Validators.required],
            workFocus: ['', Validators.required],
            gender: ['', Validators.required],
            nationality: ['', Validators.required],
            photoUrl: ['']
        });

        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = result.data.user;
                this.breadcrumbs = [
                    { label: 'profile', url: 'profile/view' },
                    { label: 'edit' },
                    { label: this.user.userId }
                ];

                this.profileEditForm.patchValue({
                    userId: this.user.userId,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    discipline: this.user.discipline,
                    position: this.user.position,
                    workFocus: this.user.workFocus,
                    gender: this.user.gender,
                    nationality: this.user.nationality,
                    photoUrl: this.user.photoUrl
                });
            });
    }
    public getDisciplines(): void {
        this.disciplineService
            .disciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines;
            });
    }
    public getWorkFocuses() {
        this.workFocusService
            .workFocuses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.workFocuses = result.data.workFocuses;
            });
    }
    public getPositions(): void {
        this.positionService
            .positions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions;
            });
    }
    public onEdit(): void {
        this.userInput.userId = this.userId.value;
        this.userInput.firstName = this.firstName.value;
        this.userInput.lastName = this.lastName.value;
        this.userInput.email = this.email.value;
        this.selectedDiscipline = this.discipline.value;
        this.userInput.disciplineId = this.selectedDiscipline.disciplineId;
        this.selectedPosition = this.position.value;
        this.userInput.positionId = this.selectedPosition.positionId;
        this.selectedWorkFocus = this.workFocus.value;
        this.userInput.workFocusName = this.selectedWorkFocus.name;
        this.userInput.gender = this.gender.value;
        this.userInput.nationality = this.nationality.value;
        this.userService
            .editUser(this.userInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {});
        this.alertService.successToast('User edited');
        this.router.navigate(['profile']);
    }
    public onBack(event): void {
        this.router.navigate(['profile']);
    }
    public onReset(event) {
        this.profileEditForm.reset();
        this.ngOnInit();
    }
    onFileSelected(event) {
        this.selectedFile = event.files[0];
        console.log(this.selectedFile);

        this.onFileUpload(
            this.selectedFile,
            this.userService.currentUserIdStatic()
        );
    }
    async onFileUpload(file, userId) {
        await this.uploadService
            .uploadProfilePicture(file, userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    console.log(result.data.uploadProfilePicture);
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
        this.alertService.successToast('Image upload success');
        this.photoUrl.reset();
    }
    public getFormalInstructionWorkload() {
        const userId = this.userService.currentUserIdStatic();
        this.workloadService
            .formalInstructionWorkloadPerUser(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.formalInstructionWorkload =
                    result.data.formalInstructionWorkloadPerUser;
            });
    }

    // Getters
    get userId() {
        return this.profileEditForm.get('userId');
    }
    get firstName() {
        return this.profileEditForm.get('firstName');
    }
    get lastName() {
        return this.profileEditForm.get('lastName');
    }
    get email() {
        return this.profileEditForm.get('email');
    }
    get discipline() {
        return this.profileEditForm.get('discipline');
    }
    get position() {
        return this.profileEditForm.get('position');
    }
    get workFocus() {
        return this.profileEditForm.get('workFocus');
    }
    get nationality() {
        return this.profileEditForm.get('nationality');
    }
    get gender() {
        return this.profileEditForm.get('gender');
    }
    get photoUrl() {
        return this.profileEditForm.get('photoUrl');
    }
    get formValue() {
        return this.profileEditForm.getRawValue();
    }
}
