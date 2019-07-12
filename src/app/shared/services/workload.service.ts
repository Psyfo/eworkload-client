import { FormalInstructionWorkload } from './../models/workload.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    BaseContactGQL,
    CoordinationGQL,
    StudentSupportGQL,
    PreparationTimeGQL,
    AssessmentSettingGQL,
    ExamMarkingGQL,
    CourseworkMarkingGQL,
    FeedbackGQL,
    FormativeAssessmentGQL,
    ModerationGQL,
    OtherGQL,
    TotalGQL,
    SumTotalGQL,
    TeachingFocusGQL,
    PercentageOfTotalGQL,
    PercentageOfFocusGQL,
    SumPercentageOfTotalGQL,
    StudentsEnrolledGQL,
    HemisGQL
} from './../generated/output';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class WorkloadService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private baseContactGql: BaseContactGQL,
        private coordinationGql: CoordinationGQL,
        private studentSupportGql: StudentSupportGQL,
        private preparationTimeGql: PreparationTimeGQL,
        private assessmentSettingGql: AssessmentSettingGQL,
        private examMarkingGql: ExamMarkingGQL,
        private courseworkMarkingGql: CourseworkMarkingGQL,
        private feedbackGql: FeedbackGQL,
        private formativeAssessmentGql: FormativeAssessmentGQL,
        private moderationGql: ModerationGQL,
        private otherGql: OtherGQL,
        private totalGql: TotalGQL,
        private sumTotalGql: SumTotalGQL,
        private teachingFocusGql: TeachingFocusGQL,
        private percentageOfTotalGql: PercentageOfTotalGQL,
        private percentageOfFocusGql: PercentageOfFocusGQL,
        private sumPercentageOfTotalGql: SumPercentageOfTotalGQL,
        private studentsEnrolledGql: StudentsEnrolledGQL,
        private hemisGql: HemisGQL
    ) {}

    baseContact(activityId: string) {
        return this.baseContactGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    coordination(activityId: string) {
        return this.coordinationGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    studentSupport(activityId: string) {
        return this.studentSupportGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    preparationTime(activityId: string) {
        return this.preparationTimeGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    assessmentSetting(activityId: string) {
        return this.assessmentSettingGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    examMarking(activityId: string) {
        return this.examMarkingGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    courseworkMarking(activityId: string) {
        return this.courseworkMarkingGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    feedback(activityId: string) {
        return this.feedbackGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formativeAssessment(activityId: string) {
        return this.formativeAssessmentGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    moderation(activityId: string) {
        return this.moderationGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    other(activityId: string) {
        return this.otherGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    total(activityId: string) {
        return this.totalGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    sumTotal(userId: string) {
        return this.sumTotalGql.watch({ userId: userId },
            {
                pollInterval: 2000
            }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
    teachingFocus(userId: string) {
        return this.teachingFocusGql
            .watch({ userId: userId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    percentageOfTotal(activityId: string) {
        return this.percentageOfTotalGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    percentageOfFocus(activityId: string) {
        return this.percentageOfFocusGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    sumPercentageOfTotal(userId: string) {
        return this.sumPercentageOfTotalGql
            .watch({ userId: userId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    studentsEnrolled(activityId) {
        return this.studentsEnrolledGql
            .watch({ activityId: activityId },
                {
                    pollInterval: 2000
                })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    hemis(userId: string) {
        return this.hemisGql.watch({ userId: userId },
            {
                pollInterval: 2000
            }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
