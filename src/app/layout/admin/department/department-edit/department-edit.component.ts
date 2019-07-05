import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { routerTransition } from '../../../../router.animations';
import { Department, Faculty } from '../../../../shared/models';
import {
    AlertService,
    DepartmentService,
    FacultyService,
} from '../../../../shared/services';

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-edit.component.html',
    styleUrls: ['./department-edit.component.scss'],
    animations: [routerTransition()],
})
export class DepartmentEditComponent implements OnInit {
    faculty: Faculty;
    faculties: Faculty[];
    department: Department;

    departmentEditForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private departmentService: DepartmentService,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.buildForm(result.departmentId);
            });
        this.valueChanges();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Getters
    get departmentId() {
        return this.departmentEditForm.get('departmentId');
    }
    get name() {
        return this.departmentEditForm.get('name');
    }
    get facultyId() {
        return this.departmentEditForm.get('facultyId');
    }
    get formVal() {
        return this.departmentEditForm.value;
    }

    // Methods

    public buildForm(departmentId: string) {
        this.departmentEditForm = this.fb.group({
            departmentId: ['', Validators.required],
            name: ['', Validators.required],
            facultyId: ['', Validators.required],
        });

        this.departmentService
            .getDepartment(departmentId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.department = <Department>(<unknown>result.data.department);

                this.getFaculties();
                console.log(this.department);

                this.departmentEditForm.patchValue({
                    departmentId: this.department.departmentId,
                    name: this.department.name,
                    facultyId: this.department.faculty.facultyId,
                });
            });
    }
    public getFaculties() {
        this.facultyService
            .getFaculties()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.faculties = result.data.faculties.map(
                    faculty => <Faculty>(<unknown>faculty)
                );
            });
    }
    public getFaculty(facultyId: string) {
        this.facultyService
            .getFaculty(facultyId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.faculty = <Faculty>(<unknown>result.data.faculty);
            });
    }
    public valueChanges() {
        this.facultyId.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(facultyId => {
                this.getFaculty(facultyId);
            });
    }
    public onCancel() {
        this.router.navigate(['../admin/department']);
    }
    public onEdit() {}
}
