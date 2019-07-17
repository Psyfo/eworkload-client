import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QualificationService } from '../../../../shared/services/qualification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from '../../../../shared/services/enrollment.service';
import { AlertService } from '../../../../shared/services';
import {
    EnrollmentInput,
    Qualification
} from 'src/app/shared/generated/output';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    enrollment: EnrollmentInput;
    qualifications: Qualification[];
    currentYear = new Date().getFullYear().toString();
    private unsubscribe = new Subject();

    enrollmentAddForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private qualificationService: QualificationService,
        private enrollmentService: EnrollmentService
    ) {}

    ngOnInit() {
        this.getQualifications();
        this.buildForm();
    }

    buildForm() {
        this.enrollmentAddForm = this.fb.group({
            enrollmentYear: [
                { value: '', disabled: true },
                Validators.required
            ],
            qualificationId: ['', Validators.required],
            firstYearEstimated: ['', Validators.required],
            secondYearEstimated: ['', Validators.required],
            thirdYearEstimated: ['', Validators.required]
        });

        this.enrollmentAddForm.patchValue({
            enrollmentYear: this.currentYear
        });
    }

    getQualifications() {
        this.qualificationService
            .getQualificationsNoEnrollment()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualificationsNoEnrollment;
            });
    }

    onAdd() {
        this.enrollment = this.formVal;
        console.log(this.enrollment);

        this.enrollmentService
            .addEnrollment(this.enrollment)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('Enrollment Added', 'success');
                setTimeout(() => {
                    this.router.navigate(
                        ['hod/enrollment/view', this.qualificationId.value],
                        {
                            queryParams: {
                                enrollmentYear: this.currentYear,
                                qualificationId: this.qualificationId.value
                            }
                        }
                    );
                }, 1000);
            });
    }

    onReset() {
        this.enrollmentAddForm.reset();
    }
    onCancel() {
        this.router.navigate(['admin/enrollment']);
    }

    // Getters

    get qualificationId() {
        return this.enrollmentAddForm.get('qualificationId');
    }
    get enrollmentYear() {
        return this.enrollmentAddForm.get('enrollmentYear');
    }
    get firstYearEstimated() {
        return this.enrollmentAddForm.get('firstYearEstimated');
    }
    get secondYearEstimated() {
        return this.enrollmentAddForm.get('secondYearEstimated');
    }
    get thirdYearEstimated() {
        return this.enrollmentAddForm.get('thirdYearEstimated');
    }
    get formVal() {
        return this.enrollmentAddForm.getRawValue();
    }
}
