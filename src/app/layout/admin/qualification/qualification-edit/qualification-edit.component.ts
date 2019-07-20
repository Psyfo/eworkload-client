import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department, QualificationInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import {
    DepartmentService,
    QualificationService
} from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
                const qualification = result.data.qualification;
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
