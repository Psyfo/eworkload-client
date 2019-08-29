import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/layout/admin/enrollment/enrollment.service';
import { QualificationService } from 'src/app/layout/admin/qualification/qualification.service';
import { routerTransition } from 'src/app/router.animations';
import { EnrollmentInput, Qualification } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-enrollment',
    templateUrl: './add-enrollment.component.html',
    styleUrls: ['./add-enrollment.component.scss'],
    animations: [routerTransition()]
})
export class AddEnrollmentComponent implements OnInit {
    breadcrumbs: MenuItem[];
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
        this.breadcrumbs = [
            { label: 'hod' },
            { label: 'enrollment', url: 'hod/enrollment' },
            { label: 'add', url: 'hod/enrollment/add' }
        ];
        this.getQualifications();
        this.buildForm();
    }

    buildForm() {
        this.enrollmentAddForm = this.fb.group({
            enrollmentYear: [
                { value: '', disabled: true },
                Validators.required
            ],
            selectedQualification: ['', Validators.required],
            firstYearEstimated: [0, Validators.required],
            secondYearEstimated: [0, Validators.required],
            thirdYearEstimated: [0, Validators.required]
        });

        this.enrollmentAddForm.patchValue({
            enrollmentYear: this.currentYear
        });
    }
    get selectedQualification() {
        return this.enrollmentAddForm.get('selectedQualification');
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

    getQualifications() {
        this.qualificationService
            .getQualificationsNoEnrollment()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualificationsNoEnrollment;
            });
    }

    onAdd() {
        const qualification = this.selectedQualification.value;
        this.enrollment.enrollmentYear = this.currentYear;
        this.enrollment.qualificationId = qualification.qualificationId;
        this.enrollment.firstYearEstimated = this.firstYearEstimated.value;
        this.enrollment.secondYearEstimated = this.secondYearEstimated.value;
        this.enrollment.thirdYearEstimated = this.thirdYearEstimated.value;

        this.enrollmentService
            .addEnrollment(this.enrollment)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.alertService.success('Enrollment Added');
                    this.router.navigate(
                        [
                            'hod/enrollment/view',
                            this.enrollment.qualificationId
                        ],
                        {
                            queryParams: {
                                enrollmentYear: this.enrollment.enrollmentYear,
                                qualificationId: this.enrollment.qualificationId
                            }
                        }
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }

    onReset(event) {
        this.enrollmentAddForm.reset();
        this.ngOnInit();
    }
    onBack(event) {
        this.router.navigate(['hod/enrollment']);
    }
}
