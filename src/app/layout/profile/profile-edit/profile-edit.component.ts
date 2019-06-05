import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { routerTransition } from '../../../router.animations';
import { Discipline, Position, User, WorkFocus } from '../../../shared/models';
import { DisciplineService, UserService } from '../../../shared/services';
import { PositionService } from '../../../shared/services/position.service';
import { AlertService } from './../../../shared/services/alert.service';
import { WorkFocusService } from '../../../shared/services/work-focus.service';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],
    animations: [routerTransition()]
})
export class ProfileEditComponent implements OnInit {
    user: User;
    userModel: User = new User();
    discipline: Discipline;
    disciplines: Discipline[];
    position: Position;
    positions: Position[];
    workFocus: WorkFocus;
    workFocuses: WorkFocus[];

    genders = ['male', 'female'];
    nationalities = ['african', 'coloured', 'indian', 'white'];

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
        private workFocusService: WorkFocusService
    ) {}

    ngOnInit() {
        // Build form
        this.profileEditForm = this.fb.group({
            userId: [{ value: '', disabled: true }, Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            disciplineId: ['', Validators.required],
            positionId: ['', Validators.required],
            workFocusName: ['', Validators.required],
            gender: ['', Validators.required],
            nationality: ['', Validators.required]
        });

        this.getDisciplines();
        this.getPositions();
        this.getWorkFocuses();
        this.buildForm();

        this.validation();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    public buildForm() {
        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = <User>(<unknown>result.data.user);

                this.profileEditForm.patchValue({
                    userId: this.user.userId,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    disciplineId: this.user.discipline.disciplineId,
                    positionId: this.user.position.positionId,
                    workFocusName: this.user.workFocusName,
                    gender: this.user.gender,
                    nationality: this.user.nationality
                });
            });
    }
    public getDisciplines(): void {
        this.disciplineService
            .getDisciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines.map(
                    discipline => <Discipline>(<unknown>discipline)
                );
            });
    }
    public getWorkFocuses() {
        this.workFocusService
            .getWorkFocuses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.workFocuses = result.data.workFocuses.map(
                    workFocus => <WorkFocus>(<unknown>workFocus)
                );
            });
    }
    public getPositions(): void {
        this.positionService
            .getPositions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions.map(
                    position => <Position>(<unknown>position)
                );
            });
    }
    public getDiscipline(disciplineId: string) {
        this.disciplineService
            .getDiscipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.userModel.discipline = <Discipline>(
                    (<unknown>result.data.discipline)
                );
            });
    }
    public getPosition(positionId: string) {
        this.positionService
            .getPosition(positionId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.userModel.position = <Position>(
                    (<unknown>result.data.position)
                );
            });
    }
    // Edit form
    public onEdit(): void {
        this.user = this.formValue;

        this.userService
            .editUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('User edited', 'success');
                console.log(this.user.userId);

                this.router.navigate(['../profile']);
            });
    }

    // Back button
    public onCancel(): void {
        this.router.navigate(['/profile/view']);
    }

    public onReset() {
        this.profileEditForm.reset();
        this.ngOnInit();
    }

    // Validation
    public validation(): void {
        this.userModel.userId = this.userId.value;
        console.log(this.userModel.userId);

        this.disciplineId.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(disciplineId => {
                this.getDiscipline(disciplineId);
            });
        this.positionId.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(positionId => {
                this.getPosition(positionId);
            });
        this.workFocusName.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(workFocusName => {});
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
    get disciplineId() {
        return this.profileEditForm.get('disciplineId');
    }
    get positionId() {
        return this.profileEditForm.get('positionId');
    }
    get workFocusName() {
        return this.profileEditForm.get('workFocusName');
    }
    get nationality() {
        return this.profileEditForm.get('nationality');
    }
    get gender() {
        return this.profileEditForm.get('gender');
    }
    get formValue() {
        return this.profileEditForm.getRawValue();
    }
}
