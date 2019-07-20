import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Enrollment, Qualification } from 'src/app/shared/generated';
import {
    EnrollmentService,
    QualificationService
} from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
    animations: [routerTransition()]
})
export class EditComponent implements OnInit {
    enrollmentYear: string;
    qualificationId: string;

    enrollment: Enrollment;
    qualifications: Qualification[];

    enrollmentEditForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private enrollmentService: EnrollmentService,
        private qualificationService: QualificationService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.enrollmentEditForm = this.fb.group({
            enrollmentYear: [{ value: '', disabled: true }],
            qualification: [''],
            firstYear: [''],
            secondYear: [''],
            thirdYear: ['']
        });

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(queryParams => {
                this.enrollmentYear = queryParams.enrollmentYear;
                this.qualificationId = queryParams.qualificationId;

                console.log(queryParams);

                this.getEnrollment(this.enrollmentYear, this.qualificationId);
                this.getQualifications();
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm(enrollment: Enrollment) {
        this.enrollmentEditForm.patchValue({
            enrollmentYear: enrollment.enrollmentYear,
            qualification: enrollment.qualification.qualificationId,
            firstYear: enrollment.firstYearEstimated,
            secondYear: enrollment.secondYearEstimated,
            thirdYear: enrollment.thirdYearEstimated
        });
    }

    getEnrollment(enrollmentYear: string, qualificationId: string) {
        this.enrollmentService
            .getEnrollment(enrollmentYear, qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.enrollment = <Enrollment>(<unknown>result.data.enrollment);
                this.buildForm(this.enrollment);
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

    addEnrollment() {
        if (this.enrollmentEditForm.invalid) {
            console.log('Form invalid');
            return;
        }
        const formVal = this.enrollmentEditForm.value;

        this.enrollment.enrollmentYear = formVal.enrollmentYear;
        this.enrollment.qualificationId = formVal.qualification;
        this.enrollment.firstYearEstimated = formVal.firstYear;
        this.enrollment.secondYearEstimated = formVal.secondYear;
        this.enrollment.thirdYearEstimated = formVal.thirdYear;

        this.enrollmentService
            .editEnrollment(this.enrollment)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log(
                    JSON.stringify(
                        'Edited enrollment!' + result.data.enrollment
                    )
                );
            });
    }

    onEdit() {
        this.addEnrollment();
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
    onCancel() {}
    onReset() {
        this.enrollmentEditForm.reset();
        this.ngOnInit();
    }
}
