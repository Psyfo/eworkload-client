import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
    Discipline,
    Position,
    User,
    UserInput,
    WorkFocus,
    Department
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DisciplineService } from '../../admin/discipline/discipline.service';
import { PositionService } from '../../admin/position/position.service';
import { UserService } from '../../admin/user/user.service';
import { WorkFocusService } from '../../admin/work-focus/work-focus.service';
import { DepartmentService } from '../../admin/department/department.service';
import { UploadService } from 'src/app/shared/services';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],
    animations: [routerTransition()]
})
export class ProfileEditComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    genders = this.userService.genders;
    nationalities = this.userService.nationalities;
    userId = this.userService.currentUserIdStatic();
    progress: boolean = false;

    userInput: UserInput = {};
    userModel: User = {};
    selectedDepartment: any;
    departments: Department[];
    selectedDisciplines: Discipline[];
    disciplines: Discipline[];
    selectedPosition: Position;
    positions: Position[];
    selectedWorkFocus: WorkFocus;
    workFocuses: WorkFocus[];
    selectedFile: File[];

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private disciplineService: DisciplineService,
        private positionService: PositionService,
        private workFocusService: WorkFocusService,
        private uploadService: UploadService,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'profile', url: 'profile/view' },
            { label: 'edit' },
            { label: this.userModel.userId }
        ];

        this.getDisciplines();
        this.getPositions();
        this.getWorkFocuses();
        this.getDepartments();
        this.getUser();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods

    public getUser() {
        this.userService
            .getUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.userModel = result.data.user;
                    this.selectedDisciplines = this.userModel.disciplines;
                    this.selectedDepartment = this.userModel.department;
                    this.selectedPosition = this.userModel.position;
                    this.selectedWorkFocus = this.userModel.workFocus;
                    console.log(this.userModel.department);
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public getDepartments(): void {
        this.departmentService
            .departments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.departments = result.data.departments.map(
                        department => {
                            const label = `${department.departmentId} - ${department.name}`;
                            let dep: any = department;
                            dep.label = label;
                            return dep;
                        }
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public getDisciplines(): void {
        this.disciplineService
            .disciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.disciplines = result.data.disciplines;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public getWorkFocuses() {
        this.workFocusService
            .workFocuses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.workFocuses = result.data.workFocuses;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public getPositions(): void {
        this.positionService
            .positions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.positions = result.data.positions;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public onSubmit(): void {
        this.progress = true;

        // User input
        this.userInput = {
            userId: this.userModel.userId,
            email: this.userModel.email,
            firstName: this.userModel.firstName,
            lastName: this.userModel.lastName,
            disciplineIds: this.selectedDisciplines.map(discipline => {
                return discipline.disciplineId;
            }),
            positionId: this.selectedPosition.positionId,
            workFocusName: this.selectedWorkFocus.name,
            departmentId: this.selectedDepartment.departmentId,
            nationality: this.userModel.departmentId,
            gender: this.userModel.gender
        };

        // Save user
        this.userService
            .editUser(this.userInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.progress = false;
                    this.alertService.successToast('User edited');
                    this.router.navigate(['profile']);
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public onBack(event): void {
        this.router.navigate(['profile']);
    }
    public onReset(event) {
        this.form.reset();
        this.selectedDisciplines = [];
        this.selectedPosition = null;
        this.selectedWorkFocus = null;
        this.selectedDepartment = null;
        this.userModel = null;
        this.userInput = {};
        this.getUser();
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
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
        this.alertService.successToast('Image upload success');
        //this.photoUrl.reset();
    }
}
