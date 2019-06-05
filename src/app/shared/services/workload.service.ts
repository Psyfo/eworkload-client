import { Injectable } from '@angular/core';

import {
    Venue,
    FormalInstructionActivity,
    Qualification,
    Module
} from '../models';
import { ActivityService } from './activity.service';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { ModuleService } from './module.service';
import { QualificationService } from './qualification.service';
import { EnrollmentService } from './enrollment.service';
import { Workload } from '../models/workload.model';
import { takeUntil, take, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
    providedIn: 'root'
})
export class WorkloadService {
    formalInstructionActivity: FormalInstructionActivity;
    formalInstructionActivities: FormalInstructionActivity[];
    qualification: Qualification;
    qualifications: Qualification[];
    module: Module;
    modules: Module[];
    enrollment: Enrollment;
    enrollments: Enrollment[];

    formalInstructionWorkload: number;
    workload: Workload;
    lectureWeeks = 12;
    repeats = 1;
    coordinator: number;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private activityService: ActivityService,
        private qualificationService: QualificationService,
        private moduleService: ModuleService,
        private enrollmentService: EnrollmentService
    ) {}

    calcFormalInstructionWorkload(userId: string) {
        this.activityService
            .getFormalInstructionActivitiesByUser(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {});
    }
    calcBaseContact(module: Module): number {
        const baseContacts =
            ((module.credits / 4) * this.lectureWeeks * this.repeats) / 1;
        return baseContacts;
    }
    calcCoordinationWorkload(module: Module): number {
        const enrollment: Enrollment = <Enrollment>(
            (<unknown>(
                this.enrollmentService.getEnrollmentStatic(
                    '2019',
                    module.qualificationId
                )
            ))
        );
        const numStudents: number =
            enrollment.firstYearEstimated +
            enrollment.secondYearEstimated +
            enrollment.thirdYearEstimated;
        const coordinationWorkload =
            5 + (numStudents / 40) * (module.credits / 10);
        return coordinationWorkload;
    }
    calcStudentSupport() {}
    calcPreparationTime() {}
    calcAssessmentSetting() {}
    calcExamMarking() {}
    calcCourseworkMarking() {}
    calcFeedbackCourseworkMarking() {}
    calcFormativeAssessmentAndEngagement() {}
    calcModeration() {}

    calcResearchWorkload() {}

    calcServiceWorkload() {}

    calcTotalWorkload() {}
}
