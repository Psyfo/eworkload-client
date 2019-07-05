import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Enrollment } from '../../../../shared/models/enrollment.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Qualification } from '../../../../shared/models';
import { QualificationService } from '../../../../shared/services/qualification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from '../../../../shared/services/enrollment.service';
import { AlertService } from '../../../../shared/services';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()],
})
export class AddComponent implements OnInit {
    enrollment: Enrollment = new Enrollment();
    qualifications: Qualification[];
    currentYear = new Date().getFullYear();
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
                Validators.required,
            ],
            qualificationId: ['', Validators.required],
            firstYearEstimated: ['', Validators.required],
            secondYearEstimated: ['', Validators.required],
            thirdYearEstimated: ['', Validators.required],
        });

        this.enrollmentAddForm.patchValue({
            enrollmentYear: this.currentYear,
        });
    }

    getQualifications() {
        this.qualificationService
            .getQualifications()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualifications.map(
                    qualification => <Qualification>(<unknown>qualification)
                );
            });
    }

    getFormValues() {
        const formVal = this.enrollmentAddForm.value;

        console.log(this.enrollment);
    }

    onAdd() {
        if (this.enrollmentAddForm.invalid) {
            this.alertService.sendMessage('Form is invalid', 'danger');
            return;
        }
        this.enrollment = this.formVal;
        this.enrollmentService
            .addEnrollment(this.enrollment)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('Enrollment Added', 'success');
                this.router.navigate(['hod/enrollment']);
            });
    }

    onReset() {
        this.enrollmentAddForm.reset();
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
