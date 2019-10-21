import { AlertService } from 'src/app/shared/modules';
import { MenuItem } from 'primeng/components/common/menuitem';
import { EnrollmentInput } from './../../../../shared/generated/output';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/layout/admin/enrollment/enrollment.service';
import { QualificationService } from 'src/app/layout/admin/qualification/qualification.service';
import { routerTransition } from 'src/app/router.animations';
import { Enrollment, Qualification } from 'src/app/shared/generated';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-enrollment',
    templateUrl: './edit-enrollment.component.html',
    styleUrls: ['./edit-enrollment.component.scss'],
    animations: [routerTransition()]
})
export class EditEnrollmentComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    enrollment: Enrollment;
    enrollmentInput: EnrollmentInput = {};
    qualifications: Qualification[];
    selectedQualification: Qualification;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private enrollmentService: EnrollmentService,
        private qualificationService: QualificationService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const qualificationId = result.get('qualificationId');
                    const enrollmentYear = result.get('enrollmentYear');
                    this.alertService.successToast(
                        `${qualificationId}(${enrollmentYear})`
                    );
                    this.getEnrollment(enrollmentYear, qualificationId);
                    this.breadcrumbs = [
                        { label: 'hod' },
                        { label: 'enrollment' },
                        { label: 'edit' },
                        { label: qualificationId }
                    ];
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
        this.getQualifications();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getEnrollment(enrollmentYear: string, qualificationId: string) {
        this.enrollmentService
            .enrollment(enrollmentYear, qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.enrollment = result.data.enrollment;
                    this.enrollmentInput = {};
                    this.enrollmentInput = {
                        enrollmentYear: this.enrollment.enrollmentYear,
                        qualificationId: this.enrollment.qualificationId,
                        firstYearEstimated: this.enrollment.firstYearEstimated,
                        secondYearEstimated: this.enrollment
                            .secondYearEstimated,
                        thirdYearEstimated: this.enrollment.thirdYearEstimated
                    };
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    getQualifications() {
        this.qualificationService
            .qualificationsNoEnrollment()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualificationsNoEnrollment;
            });
    }

    onSubmit() {
        this.enrollmentService
            .editEnrollment(this.enrollmentInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {},
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
        this.router.navigate(
            ['hod/enrollment/view', this.enrollment.qualificationId],
            {
                queryParams: {
                    enrollmentYear: this.enrollment.enrollmentYear,
                    qualificationId: this.enrollment.qualificationId
                }
            }
        );
    }
    onBack(event) {
        this.router.navigate(['hod/enrollment']);
    }
    onReset(event) {
        this.ngOnInit();
    }
}
