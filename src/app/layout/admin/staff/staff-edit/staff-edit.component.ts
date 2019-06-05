import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from './../../../../shared/services/alert.service';
import {
    User,
    Discipline,
    Position,
    WorkFocus
} from '../../../../shared/models';
import {
    EditUserGQL,
    UserGQL,
    DisciplinesGQL,
    PositionsGQL
} from '../../../../shared/generated/output';
import {
    UserService,
    DisciplineService,
    PositionService,
    WorkFocusService
} from '../../../../shared/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-staff-edit',
    templateUrl: './staff-edit.component.html',
    styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
    userId: string;
    user: User = new User();

    disciplines: Discipline[];
    positions: Position[];
    workFocuses: WorkFocus[];

    userEditForm: FormGroup;
    genders = ['male', 'female'];
    nationalities = ['african', 'coloured', 'indian', 'white'];

    private unsubscribe = new Subject();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder,
        private userService: UserService,
        private disciplineService: DisciplineService,
        private positionService: PositionService,
        private workFocusService: WorkFocusService
    ) {}

    ngOnInit() {
        // Build form
        this.userEditForm = this.fb.group({
            userId: [{ value: '', disabled: true }, Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            disciplineId: ['', Validators.required],
            positionId: ['', Validators.required],
            workFocusName: ['', Validators.required],
            gender: ['', Validators.required],
            nationality: ['', Validators.required]
        });

        this.getDisciplines();
        this.getPositions();
        this.getWorkFocuses();

        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.userId = result.userId;

                this.getUser();
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    ngDoCheck(): void {}

    // Methods
    public getUser(): void {
        this.userService
            .getUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = <User>(<unknown>result.data.user);
                console.log(this.user);

                this.userEditForm.patchValue({
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
            .subscribe(
                result =>
                    (this.disciplines = result.data.disciplines.map(
                        discipline => <Discipline>(<unknown>discipline)
                    ))
            );
    }

    public getPositions(): void {
        this.positionService
            .getPositions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result =>
                    (this.positions = result.data.positions.map(
                        position => <Position>(<unknown>position)
                    ))
            );
    }

    public getWorkFocuses(): void {
        this.workFocusService
            .getWorkFocuses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result =>
                    (this.workFocuses = result.data.workFocuses.map(
                        workFocus => <WorkFocus>(<unknown>workFocus)
                    ))
            );
    }

    public onEdit(): void {
        if (this.userEditForm.invalid) {
            this.alertService.sendMessage('Form is not valid', 'danger');
            return;
        }

        const formVal = this.userEditForm.value;
        this.user.userId = formVal.userId;
        this.user.firstName = formVal.firstName;
        this.user.lastName = formVal.lastName;
        this.user.email = formVal.email;
        this.user.disciplineId = formVal.disciplineId;
        this.user.positionId = formVal.positionId;
        this.user.workFocusName = formVal.workFocusName;
        this.user.gender = formVal.gender;
        this.user.nationality = formVal.nationality;

        console.log(this.user);

        this.userService
            .editUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('User data updated', 'success');
                this.router.navigate(['admin/staff/view', this.userId], {
                    queryParams: {
                        userId: this.userId
                    }
                });
            });
    }

    onCancel() {
        this.router.navigate(['../admin/staff']);
    }
}
