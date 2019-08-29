import { map } from 'rxjs/operators';
import {
    AddFormalInstructionActivityGQL,
    DeleteFormalInstructionActivityGQL,
    EditFormalInstructionActivityGQL,
    FormalInstructionActivitiesByUserGQL,
    FormalInstructionActivitiesGQL,
    FormalInstructionActivityGQL,
    FormalInstructionActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

import {
    FormalInstructionAssessmentSettingHoursGQL,
    FormalInstructionBaseContactHoursGQL,
    FormalInstructionCoordinationHoursGQL,
    FormalInstructionCourseworkMarkingHoursGQL,
    FormalInstructionExamMarkingHoursGQL,
    FormalInstructionFeedbackHoursGQL,
    FormalInstructionFormativeAssessmentHoursGQL,
    FormalInstructionLectureWeeksGQL,
    FormalInstructionModerationHoursGQL,
    FormalInstructionOtherHoursPerActivityGQL,
    FormalInstructionPercentageOfAnnualHoursPerActivityGQL,
    FormalInstructionPercentageOfAnnualHoursPerUserGQL,
    FormalInstructionPercentageOfWorkFocusPerActivityGQL,
    FormalInstructionPercentageOfWorkFocusPerUserGQL,
    FormalInstructionPreparationTimeHoursGQL,
    FormalInstructionStudentsEnrolledGQL,
    FormalInstructionStudentSupportHoursGQL,
    FormalInstructionTotalHoursPerActivityGQL,
    FormalInstructionTotalHoursPerUserGQL
} from '../../../shared/generated/output';

@Injectable({
    providedIn: 'root'
})
export class FormalInstructionService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private formalInstructionActivityGql: FormalInstructionActivityGQL,
        private formalInstructionActivitiesGql: FormalInstructionActivitiesGQL,
        private formalInstructionActivitiesByUserGql: FormalInstructionActivitiesByUserGQL,
        private addformalInstructionActivityGql: AddFormalInstructionActivityGQL,
        private editformalInstructionActivityGql: EditFormalInstructionActivityGQL,
        private deleteformalInstructionActivityGql: DeleteFormalInstructionActivityGQL,
        private formalInstructionLectureWeeksGql: FormalInstructionLectureWeeksGQL,
        private formalInstructionStudentsEnrolledGql: FormalInstructionStudentsEnrolledGQL,
        private formalInstructionBaseContactHoursGql: FormalInstructionBaseContactHoursGQL,
        private formalInstructionCoordinationHoursGql: FormalInstructionCoordinationHoursGQL,
        private formalInstructionStudentSupportHoursGql: FormalInstructionStudentSupportHoursGQL,
        private formalInstructionPreparationTimeHoursGql: FormalInstructionPreparationTimeHoursGQL,
        private formalInstructionAssessmentSettingHoursGql: FormalInstructionAssessmentSettingHoursGQL,
        private formalInstructionExamMarkingHoursGql: FormalInstructionExamMarkingHoursGQL,
        private formalInstructionCourseworkMarkingHoursGql: FormalInstructionCourseworkMarkingHoursGQL,
        private formalInstructionFeedbackHoursGql: FormalInstructionFeedbackHoursGQL,
        private formalInstructionFormativeAssessmentHoursGql: FormalInstructionFormativeAssessmentHoursGQL,
        private formalInstructionModerationHoursGql: FormalInstructionModerationHoursGQL,
        private formalInstructionTotalHoursPerActivityGql: FormalInstructionTotalHoursPerActivityGQL,
        private formalInstructionOtherHoursPerActivityGql: FormalInstructionOtherHoursPerActivityGQL,
        private formalInstructionTotalHoursPerUserGql: FormalInstructionTotalHoursPerUserGQL,
        private formalInstructionPercentageOfWorkFocusPerActivityGql: FormalInstructionPercentageOfWorkFocusPerActivityGQL,
        private formalInstructionPercentageOfWorkFocusPerUserGql: FormalInstructionPercentageOfWorkFocusPerUserGQL,
        private formalInstructionPercentageOfAnnualHoursPerActivityGql: FormalInstructionPercentageOfAnnualHoursPerActivityGQL,
        private formalInstructionPercentageOfAnnualHoursPerUserGql: FormalInstructionPercentageOfAnnualHoursPerUserGQL
    ) {}

    formalInstructionActivity(activityId: string) {
        return this.formalInstructionActivityGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionActivities() {
        return this.formalInstructionActivitiesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionActivitiesByUser(userId: string) {
        return this.formalInstructionActivitiesByUserGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    addFormalInstructionActivity(activity: FormalInstructionActivityInput) {
        return this.addformalInstructionActivityGql
            .mutate({ activity: activity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editFormalInstructionActivity(activity: FormalInstructionActivityInput) {
        return this.editformalInstructionActivityGql
            .mutate({ activity: activity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    deleteFormalInstructionActivity(activity: FormalInstructionActivityInput) {
        return this.deleteformalInstructionActivityGql
            .mutate({ activity: activity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    // Worklaod methods
    formalInstructionLectureWeeks(activityId: string) {
        return this.formalInstructionLectureWeeksGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionStudentsEnrolled(activityId: string) {
        return this.formalInstructionStudentsEnrolledGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionBaseContactHours(activityId: string) {
        return this.formalInstructionBaseContactHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionCoordinationHours(activityId: string) {
        return this.formalInstructionCoordinationHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionStudentSupportHours(activityId: string) {
        return this.formalInstructionStudentSupportHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionPreparationTimeHours(activityId: string) {
        return this.formalInstructionPreparationTimeHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionAssessmentSettingHours(activityId: string) {
        return this.formalInstructionAssessmentSettingHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionExamMarkingHours(activityId: string) {
        return this.formalInstructionExamMarkingHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionCourseworkMarkingHours(activityId: string) {
        return this.formalInstructionCourseworkMarkingHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionFeedbackHours(activityId: string) {
        return this.formalInstructionFeedbackHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionFormativeAssessmentHours(activityId: string) {
        return this.formalInstructionFormativeAssessmentHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionModerationHours(activityId: string) {
        return this.formalInstructionModerationHoursGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionTotalHoursPerActivity(activityId: string) {
        return this.formalInstructionTotalHoursPerActivityGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionOtherHoursPerActivity(activityId: string) {
        return this.formalInstructionOtherHoursPerActivityGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionTotalHoursPerUser(userId: string) {
        return this.formalInstructionTotalHoursPerUserGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionPercentageOfWorkFocusPerActivity(activityId: string) {
        return this.formalInstructionPercentageOfWorkFocusPerActivityGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionPercentageOfWorkFocusPerUser(userId: string) {
        return this.formalInstructionPercentageOfWorkFocusPerUserGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionPercentageOfAnnualHoursPerActivity(activityId: string) {
        return this.formalInstructionPercentageOfAnnualHoursPerActivityGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionPercentageOfAnnualHoursPerUser(userId: string) {
        return this.formalInstructionPercentageOfAnnualHoursPerUserGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
}
