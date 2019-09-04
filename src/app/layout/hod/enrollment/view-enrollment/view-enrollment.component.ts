import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/layout/admin/enrollment/enrollment.service';
import { routerTransition } from 'src/app/router.animations';
import { Enrollment } from 'src/app/shared/generated';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-view-enrollment',
    templateUrl: './view-enrollment.component.html',
    styleUrls: ['./view-enrollment.component.scss'],
    animations: [routerTransition()]
})
export class ViewEnrollmentComponent implements OnInit {
    enrollmentYear: string = '';
    qualificationId: string = '';

    enrollment: Enrollment;

    private unsubscribe = new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private enrollmentService: EnrollmentService
    ) {}

    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(queryparams => {
                this.enrollmentYear = queryparams.enrollmentYear;
                this.qualificationId = queryparams.qualificationId;

                this.getEnrollment(this.enrollmentYear, this.qualificationId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getEnrollment(enrollmentYear: string, qualificationId: string) {
        this.enrollmentService
            .enrollment(enrollmentYear, qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.enrollment = <Enrollment>(<unknown>result.data.enrollment);
            });
    }

    onEdit() {
        this.router.navigate(['hod/enrollment/edit', this.qualificationId], {
            queryParams: {
                enrollmentYear: this.enrollmentYear,
                qualificationId: this.qualificationId
            }
        });
    }
    onCancel() {
        this.router.navigate(['hod/enrollment']);
    }
    onDelete() {}
}
