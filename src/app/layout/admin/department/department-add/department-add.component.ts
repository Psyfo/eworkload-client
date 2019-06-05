import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { routerTransition } from '../../../../router.animations';
import { Faculty, Department } from '../../../../shared/models';
import {
    AlertService,
    FacultyService,
    DepartmentService
} from '../../../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-department-add',
    templateUrl: './department-add.component.html',
    styleUrls: ['./department-add.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentAddComponent implements OnInit {
    faculties: Faculty[];
    department: Department;

    departmentAddForm: FormGroup;

    private unsubscribe = new Subject();

    // Configs
    submitAble: boolean = false;

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
            departmentId: ['', Validators.required],
            name: ['', Validators.required],
            facultyId: ['']
        });

        // Fetch dropdown data;
        this.getFaculties();
    }

    onAdd() {
        if (!this.departmentAddForm.valid) {
            this.alertService.sendMessage('Form not valid', 'danger');
            return;
        }
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
}
