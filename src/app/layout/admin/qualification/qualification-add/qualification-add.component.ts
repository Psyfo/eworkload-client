import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Department, Qualification } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import {
    DepartmentService,
    QualificationService
} from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-qualification-add',
    templateUrl: './qualification-add.component.html',
    styleUrls: ['./qualification-add.component.scss'],
    animations: [routerTransition()]
})
export class QualificationAddComponent implements OnInit {
    qualification: Qualification;
    departments: Department[];
    types = this.qualificationService.types;

    qualificationAddForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private qualificationService: QualificationService,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    buildForm() {
        this.getDepartments();

        this.qualificationAddForm = this.fb.group({
            qualificationId: ['', [Validators.required]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            departmentId: ['', [Validators.required]]
        });
    }
    getDepartments() {
        this.departmentService
            .getDepartments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.departments = result.data.departments.map(
                    department => <Department>(<unknown>department)
                );
            });
    }
    onAdd() {
        this.qualification = this.formVal;
        this.qualificationService
            .addQualification(this.qualification)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Qualification added');
                this.router.navigate(
                    [
                        'admin/qualification/view',
                        this.qualification.qualificationId
                    ],
                    {
                        queryParams: {
                            qualificationId: this.qualification.qualificationId
                        }
                    }
                );
            });
    }
    onCancel() {
        this.router
            .navigate(['admin/qualification'])
            .then(() => window.location.reload());
    }
    onReset() {}

    // Getters
    get qualificationId() {
        return this.qualificationAddForm.get('qualificationId');
    }
    get name() {
        return this.qualificationAddForm.get('name');
    }
    get type() {
        return this.qualificationAddForm.get('type');
    }
    get departmentId() {
        return this.qualificationAddForm.get('departmentId');
    }
    get formVal() {
        return this.qualificationAddForm.getRawValue();
    }
}
