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

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
    activities: FormalInstructionActivity[];
    duties: Duty[];
    enrollment: Enrollment;
    userId: string = this.userService.currentUserIdStatic();
    students;
    formalInstructionWorkload: FormalInstructionWorkload;
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
        this.getActivities();
        this.getDuties();
        this.getFormalInstructionWorkload(
            this.userService.currentUserIdStatic()
        );
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getActivities() {
        this.activityService
            .getFormalInstructionActivitiesByUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activities = result.data.formalInstructionActivitiesByUser.map(
                    activity => <FormalInstructionActivity>(<unknown>activity)
                );
                console.log(this.activities);
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

    getFormalInstructionWorkload(userId: string) {
        this.workloadService
            .getFormalInstructionWorkload(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.formalInstructionWorkload = <FormalInstructionWorkload>(
                    (<unknown>result.data.formalInstructionWorkload)
                );
            });
    }
}
