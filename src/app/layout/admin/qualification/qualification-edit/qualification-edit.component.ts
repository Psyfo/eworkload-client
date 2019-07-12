import { Subject } from 'rxjs';
import {
    Department,
    Qualification,
    QualificationInput
} from 'src/app/shared/models';
import {
    AlertService,
    QualificationService,
    DepartmentService
} from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-qualification-edit',
    templateUrl: './qualification-edit.component.html',
    styleUrls: ['./qualification-edit.component.scss']
})
export class QualificationEditComponent implements OnInit {
    qualificationInput: QualificationInput;
    departments: Department[];
    types = this.qualificationService.types;

    private unsubscribe = new Subject();

    qualificationEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private qualificationService: QualificationService,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        this.getDepartments();
        console.log(this.departments);
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.buildForm(result.qualificationId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    public buildForm(qualificationId: string) {
        this.qualificationEditForm = this.fb.group({
            qualificationId: ['', [Validators.required]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            departmentId: ['', [Validators.required]]
        });

        this.qualificationService
            .getQualification(qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                const qualification = <Qualification>(
                    (<unknown>result.data.qualification)
                );
                this.qualificationEditForm.patchValue(qualification);
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

    public onEdit() {}
    public onCancel() {}
    public onReset() {}
}
