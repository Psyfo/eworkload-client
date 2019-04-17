import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from './../../../../shared/services/alert.service';
import { User, Discipline, Position } from '../../../../shared/models';
import {
    EditUserGQL,
    UserGQL,
    DisciplinesGQL,
    PositionsGQL
} from '../../../../shared/generated/output';

@Component({
    selector: 'app-staff-edit',
    templateUrl: './staff-edit.component.html',
    styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
    userId: string;
    user: User;
    loading: boolean;
    errors: any;

    disciplines: Discipline[];
    positions: Position[];

    userEditForm: FormGroup;
    genders = ['male', 'female'];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder,
        private userGql: UserGQL,
        private disciplinesGql: DisciplinesGQL,
        private positionsGql: PositionsGQL,
        private editUserGql: EditUserGQL
    ) {}

    ngOnInit() {
        // Get ID from route
        this.userId = this.activatedRoute.snapshot.paramMap.get('id');

        // Build form
        this.userEditForm = this.fb.group({
            userId: [{ value: '', disabled: true }, Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            gender: [''],
            email: ['', Validators.required],
            nationality: ['', Validators.required],
            qualificationId: [''],
            disciplineId: [''],
            positionId: ['']
        });

        this.initializeForm();
    }

    // Methods

    public initializeForm(): any {
        this.getUser();
    }

    public getUser() {
        this.userGql
            .watch({ userId: this.userId })
            .valueChanges.subscribe(result => {
                this.loading = result.loading;
                this.user = result.data.user as User;
                if (result.errors) {
                    this.errors = result.errors;
                    console.log(result.errors);
                }

                this.getDisciplines();
                this.getPositions();

                this.userEditForm.patchValue({
                    userId: this.user.userId,
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    disciplineId: this.user.discipline.disciplineId,
                    positionId: this.user.position.positionId,
                });
            });
    }

    public getDisciplines(): void {
        this.disciplinesGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.disciplines = result.data.disciplines as Discipline[];
            if (result.errors) {
                this.errors = result.errors;
                console.log(result.errors);
            }
        });
    }

    public getPositions(): void {
        this.positionsGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.positions = result.data.positions as Position[];
            if (result.errors) {
                this.errors = result.errors;
                console.log(result.errors);
            }
        });
    }

    public onEdit(): void {}

    onBack() {
        this.router.navigate(['../admin/staff']);
    }
}
