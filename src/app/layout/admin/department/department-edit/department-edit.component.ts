import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from '../../../../shared/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentGQL, FacultiesGQL } from '../../../../shared/generated/output';
import { Department, Faculty } from '../../../../shared/models';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-edit.component.html',
    styleUrls: ['./department-edit.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentEditComponent implements OnInit {
    faculties: Faculty[];
    departmentId: string;
    department: Department;
    loading: boolean;
    errors: any;

    departmentEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private departmentGql: DepartmentGQL,
        private facultiesGql: FacultiesGQL
    ) {}

    ngOnInit() {
        // Get id from route;
        this.departmentId = this.activatedRoute.snapshot.paramMap.get('id');

        // Build form
        this.departmentEditForm = this.fb.group({
            departmentId: ['', Validators.required],
            name: ['', Validators.required],
            facultyId: ['']
        });

        this.initializeForm();
    }

    // Methods

    public initializeForm() {
        this.departmentGql.watch({departmentId: this.departmentId}).valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.department = result.data.department as Department;
            this.errors = result.errors;

            if (this.errors) {
                this.errors.forEach(error => {
                    console.log(`Error: ${error}`);
                    this.alertService.sendMessage(error.message, 'warn');
                });
            }

            this.getFaculties();
            this.departmentEditForm.patchValue({
                departmentId: this.department.departmentId,
                name: this.department.name,
                facultyId: this.department.faculty.facultyId
            });
        });
    }

    public getDepartments() {}

    public getFaculties() {
        this.facultiesGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.faculties = result.data.faculties as Faculty[];
            this.errors = result.errors;

            if (this.errors) {
                this.errors.forEach(error => {
                    console.log(`Error: ${error}`);
                    this.alertService.sendMessage(error.message, 'warn');
                });
            }
        })
    }

    public onBack() {
        this.router.navigate(['../admin/department']);
    }

    public onEdit() {}
}
