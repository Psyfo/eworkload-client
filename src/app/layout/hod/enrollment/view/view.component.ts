import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Enrollment } from 'src/app/shared/generated/output';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { EnrollmentService } from '../../../../shared/services';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    animations: [routerTransition()]
})
export class ViewComponent implements OnInit {
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
            .getEnrollment(enrollmentYear, qualificationId)
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
