import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { DepartmentInput, Faculty } from 'src/app/shared/generated/output';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { AlertService } from 'src/app/shared/modules';
import { FacultyService, DepartmentService } from 'src/app/shared/services';

@Component({
    selector: 'app-department-add',
    templateUrl: './department-add.component.html',
    styleUrls: ['./department-add.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentAddComponent implements OnInit {
    faculties: Faculty[];
    department: DepartmentInput;

    departmentAddForm: FormGroup;

    private unsubscribe = new Subject();

    // Configs

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private facultyService: FacultyService,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        //Build form
        this.departmentAddForm = this.fb.group({
            departmentId: ['', [Validators.required]],
            name: ['', [Validators.required]],
            facultyId: ['', [Validators.required]]
        });

        // Fetch dropdown data;
        this.getFaculties();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onAdd() {
        this.department = this.formVal;
        this.departmentService
            .addDepartment(this.department)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log('Errors:', result.errors);
                console.log('Network Status:', result.networkStatus);
                this.alertService.success('Department added');
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

    onCancel() {
        this.router.navigate(['../admin/department']);
    }

    onReset() {
        this.departmentAddForm.reset();
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

    // Getters
    get departmentId() {
        return this.departmentAddForm.get('departmentId');
    }
    get name() {
        return this.departmentAddForm.get('name');
    }
    get facultyId() {
        return this.departmentAddForm.get('facultyId');
    }
    get formVal() {
        return this.departmentAddForm.getRawValue();
    }
}
