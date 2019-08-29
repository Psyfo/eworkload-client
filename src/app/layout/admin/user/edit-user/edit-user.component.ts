import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
    Discipline,
    Position,
    User,
    UserInput,
    WorkFocus
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DisciplineService } from '../../discipline/discipline.service';
import { PositionService } from '../../position/position.service';
import { WorkFocusService } from '../../work-focus/work-focus.service';
import { UserService } from '../user.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss'],
    animations: [routerTransition()]
})
export class EditUserComponent implements OnInit {
    breadcrumbs: MenuItem[];

    user: User;
    userInput: UserInput = {};

    disciplines: Discipline[];
    positions: Position[];
    workFocuses: WorkFocus[];
    selectedDiscipline: Discipline;
    selectedPosition: Position;
    selectedWorkFocus: WorkFocus;

    userEditForm: FormGroup;
    genders = this.userService.genders;
    nationalities = this.userService.nationalities;

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
            email: ['', [Validators.required, Validators.email]],
            discipline: ['', Validators.required],
            position: ['', Validators.required],
            workFocus: ['', Validators.required],
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
                this.getUser(result.userId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    ngDoCheck(): void {}

    // Methods
    public getUser(userId: string): void {
        this.userService
            .getUser(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = result.data.user;
                this.breadcrumbs = [
                    { label: 'admin' },
                    { label: 'user', url: 'admin/user' },
                    { label: 'edit' },
                    { label: this.user.userId }
                ];

                this.userEditForm.patchValue({
                    userId: this.user.userId,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    disciplineId: this.user.disciplineId,
                    positionId: this.user.positionId,
                    workFocusName: this.user.workFocusName,
                    gender: this.user.gender,
                    nationality: this.user.nationality
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

    public getPositions(): void {
        this.positionService
            .positions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions;
            });
    }

    public getWorkFocuses(): void {
        this.workFocusService
            .workFocuses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.workFocuses = result.data.workFocuses;
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
            .subscribe(result => {
                this.alertService.success('User data updated');
                this.router.navigate(['admin/user/view', this.userId], {
                    queryParams: {
                        userId: this.userId
                    }
                });
            });
    }

    onBack(event) {
        this.router.navigate(['admin/user']);
    }
    onReset(event) {
        this.userEditForm.reset();
        this.ngOnInit();
    }

    // Getters
    get formVal() {
        return this.userEditForm.getRawValue();
    }
    get userId() {
        return this.userEditForm.get('userId');
    }
    get email() {
        return this.userEditForm.get('email');
    }
    get firstName() {
        return this.userEditForm.get('firstName');
    }
    get lastName() {
        return this.userEditForm.get('lastName');
    }
    get gender() {
        return this.userEditForm.get('gender');
    }
    get nationality() {
        return this.userEditForm.get('nationality');
    }
    get discipline() {
        return this.userEditForm.get('discipline');
    }
    get position() {
        return this.userEditForm.get('position');
    }
    get workFocus() {
        return this.userEditForm.get('workFocus');
    }
}
