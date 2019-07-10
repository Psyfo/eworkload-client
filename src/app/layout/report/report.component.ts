import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WorkloadService } from '../../shared/services';
import { FormalInstructionActivity } from './../../shared/models/activity.model';
import { Duty } from './../../shared/models/duty.model';
import { Enrollment } from './../../shared/models/enrollment.model';
import { FormalInstructionWorkload } from './../../shared/models/workload.model';
import { ActivityService } from './../../shared/services/activity.service';
import { AlertService } from './../../shared/services/alert.service';
import { DutyService } from './../../shared/services/duty.service';
import { EnrollmentService } from './../../shared/services/enrollment.service';
import { UserService } from './../../shared/services/user.service';
import { HemisData } from '../../shared/generated/output';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    activities: FormalInstructionActivity[];
    duties: Duty[];
    enrollment: Enrollment;
    hemisData: HemisData[];
    userId: string = this.userService.currentUserIdStatic();
    students;
    studentsList = [];
    percentageOfTotal: number;
    sumPercentageOfTotal: number;
    formalInstructionWorkload: FormalInstructionWorkload;
    formalInstructionWorkloads: FormalInstructionWorkload[];
    private unsubscribe = new Subject();
    constructor(
        private router: Router,
        private alertService: AlertService,
        private activityService: ActivityService,
        private userService: UserService,
        private enrollmentService: EnrollmentService,
        private dutyService: DutyService,
        private workloadService: WorkloadService
    ) {}

    ngOnInit() {
        this.getHemisData();
        this.getSumPercentageOfTotal();
        this.getDuties();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getHemisData() {
        const userId = this.userService.currentUserIdStatic();
        this.workloadService
            .hemis(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.hemisData = result.data.hemis.map(
                    hemisItem => <HemisData>(<unknown>hemisItem)
                );
            });
    }

    baseContact(activityId: string) {
        return this.workloadService
            .baseContact(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log('Base Contact: ', result.data.baseContact);
                return result.data.baseContact;
            });
    }

    other(activityId: string) {
        return this.workloadService
            .other(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                return result.data.other;
            });
    }

    total(activityId: string) {
        return this.workloadService
            .total(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                return result.data.total;
            });
    }

    studentsEnrolled(activityId: string) {
        return this.workloadService
            .studentsEnrolled(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                return result.data.studentsEnrolled;
            });
    }

    getPercentageOfTotal(activityId: string) {
        this.workloadService
            .percentageOfTotal(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.percentageOfTotal = <number>(
                    (<unknown>result.data.percentageOfTotal)
                );
            });
    }

    getSumPercentageOfTotal() {
        const userId = this.userService.currentUserIdStatic();
        this.workloadService
            .sumPercentageOfTotal(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log(result.data.sumPercentageOfTotal);

                this.sumPercentageOfTotal = <number>(
                    (<unknown>result.data.sumPercentageOfTotal)
                );
            });
    }

    getDuties() {
        this.dutyService
            .getDuties()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.duties = result.data.duties.map(
                    duty => <Duty>(<unknown>duty)
                );
            });
    }

    getEnrollment(qualificationId: string) {
        this.enrollmentService
            .getEnrollment(new Date().getFullYear().toString(), qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.enrollment = <Enrollment>(<unknown>result.data.enrollment);
            });
    }

    getStudents(activityId: string) {}
}
