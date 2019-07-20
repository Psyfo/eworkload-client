import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Department, DepartmentInput, Faculty } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { DepartmentService, FacultyService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-edit.component.html',
    styleUrls: ['./department-edit.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentEditComponent implements OnInit {
    faculties: Faculty[];
    departmentInput: DepartmentInput;
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
        return this.departmentEditForm.getRawValue();
    }

    // Methods

    public buildForm(departmentId: string) {
        this.departmentEditForm = this.fb.group({
            departmentId: [
                { value: '', disabled: true },
                [Validators.required]
            ],
            name: ['', [Validators.required]],
            facultyId: ['', [Validators.required]]
        });

        this.departmentService
            .getDepartment(departmentId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.department = <Department>(<unknown>result.data.department);

                this.getFaculties();
                console.log('Dept Id:', this.department.departmentId);

                this.departmentEditForm.patchValue({
                    departmentId: this.department.departmentId,
                    name: this.department.name,
                    facultyId: this.department.faculty.facultyId
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
    public onEdit() {
        this.departmentInput = this.formVal;
        this.departmentService
            .editDepartment(this.departmentInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log('Errors:', result.errors);
                console.log('Network Status:', result.networkStatus);
                this.alertService.success('Department edited');
                setTimeout(() => {
                    this.router.navigate(
                        ['admin/department/view', this.departmentId.value],
                        {
                            queryParams: {
                                departmentId: this.departmentId.value
                            }
                        }
                    );
                }, 3000);
            });
    }
    public onCancel() {
        this.router.navigate(
            ['admin/department/view', this.departmentId.value],
            {
                queryParams: {
                    departmentId: this.departmentId.value
                }
            }
        );
    }
    public onReset() {
        this.departmentEditForm.reset();
        this.ngOnInit();
    }
}
