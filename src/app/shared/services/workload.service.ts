import {
    TeachingHoursGQL,
    ResearchHoursGQL,
    ServiceHoursGQL,
    AnnualHoursGQL,
    TotalHoursPerUserGQL,
    AcademicAdministrationTotalHoursPerActivityGQL,
    AcademicAdministrationGlobalTarrifGQL,
    AcademicAdministrationTotalHoursPerUserGQL,
    AcademicAdministrationPercentageOfWorkFocusPerActivityGQL,
    AcademicAdministrationPercentageOfWorkFocusPerUserGQL,
    AcademicAdministrationPercentageOfAnnualHoursPerActivityGQL,
    AcademicAdministrationPercentageOfAnnualHoursPerUserGQL,
    AcademicAdministrationPercentageOfTotalHoursPerActivityGQL,
    AcademicAdministrationPercentageOfTotalHoursPerUserGQL,
    ExecutiveManagementPercentageOfAnnualHoursPerActivityGQL,
    ExecutiveManagementPercentageOfWorkFocusPerUserGQL,
    ExecutiveManagementGlobalTarrifGQL,
    ExecutiveManagementTotalHoursPerActivityGQL,
    ExecutiveManagementTotalHoursPerUserGQL,
    ExecutiveManagementPercentageOfWorkFocusPerActivityGQL,
    ExecutiveManagementPercentageOfTotalHoursPerActivityGQL,
    ExecutiveManagementPercentageOfAnnualHoursPerUserGQL,
    ExecutiveManagementPercentageOfTotalHoursPerUserGQL,
    CommunityInstructionGlobalTarrifGQL,
    CommunityInstructionTotalHoursPerActivityGQL,
    CommunityInstructionTotalHoursPerUserGQL,
    CommunityInstructionPercentageOfWorkFocusPerActivityGQL,
    CommunityInstructionPercentageOfWorkFocusPerUserGQL,
    CommunityInstructionPercentageOfAnnualHoursPerActivityGQL,
    CommunityInstructionPercentageOfAnnualHoursPerUserGQL,
    CommunityInstructionPercentageOfTotalHoursPerActivityGQL,
    CommunityInstructionPercentageOfTotalHoursPerUserGQL,
    PersonnelDevelopmentGlobalTarrifGQL,
    PersonnelDevelopmentTotalHoursPerActivityGQL,
    PersonnelDevelopmentTotalHoursPerUserGQL,
    PersonnelDevelopmentPercentageOfWorkFocusPerActivityGQL,
    PersonnelDevelopmentPercentageOfWorkFocusPerUserGQL,
    PersonnelDevelopmentPercentageOfAnnualHoursPerActivityGQL,
    PersonnelDevelopmentPercentageOfAnnualHoursPerUserGQL,
    PersonnelDevelopmentPercentageOfTotalHoursPerActivityGQL,
    PersonnelDevelopmentPercentageOfTotalHoursPerUserGQL,
    PublicServiceGlobalTarrifGQL,
    PublicServiceTotalHoursPerActivityGQL,
    PublicServiceTotalHoursPerUserGQL,
    PublicServicePercentageOfWorkFocusPerActivityGQL,
    PublicServicePercentageOfWorkFocusPerUserGQL,
    PublicServicePercentageOfAnnualHoursPerActivityGQL,
    PublicServicePercentageOfAnnualHoursPerUserGQL,
    PublicServicePercentageOfTotalHoursPerActivityGQL,
    PublicServicePercentageOfTotalHoursPerUserGQL,
    ResearchGlobalTarrifGQL,
    ResearchTotalHoursPerActivityGQL,
    ResearchTotalHoursPerUserGQL,
    ResearchPercentageOfWorkFocusPerActivityGQL,
    ResearchPercentageOfWorkFocusPerUserGQL,
    ResearchPercentageOfAnnualHoursPerActivityGQL,
    ResearchPercentageOfAnnualHoursPerUserGQL,
    ResearchPercentageOfTotalHoursPerActivityGQL,
    ResearchPercentageOfTotalHoursPerUserGQL,
    SupervisionGlobalTarrifGQL,
    SupervisionTotalHoursPerActivityGQL,
    SupervisionTotalHoursPerUserGQL,
    SupervisionPercentageOfWorkFocusPerActivityGQL,
    SupervisionPercentageOfWorkFocusPerUserGQL,
    SupervisionPercentageOfAnnualHoursPerActivityGQL,
    SupervisionPercentageOfAnnualHoursPerUserGQL,
    SupervisionPercentageOfTotalHoursPerActivityGQL,
    SupervisionPercentageOfTotalHoursPerUserGQL,
    FormalInstructionLectureWeeksGQL,
    FormalInstructionStudentsEnrolledGQL,
    FormalInstructionBaseContactHoursGQL,
    FormalInstructionCoordinationHoursGQL,
    FormalInstructionStudentSupportHoursGQL,
    FormalInstructionPreparationTimeHoursGQL,
    FormalInstructionAssessmentSettingHoursGQL,
    FormalInstructionExamMarkingHoursGQL,
    FormalInstructionCourseworkMarkingHoursGQL,
    FormalInstructionFeedbackHoursGQL,
    FormalInstructionFormativeAssessmentHoursGQL,
    FormalInstructionModerationHoursGQL,
    FormalInstructionTotalHoursPerActivityGQL,
    FormalInstructionOtherHoursPerActivityGQL,
    FormalInstructionTotalHoursPerUserGQL,
    FormalInstructionPercentageOfWorkFocusPerActivityGQL,
    FormalInstructionPercentageOfWorkFocusPerUserGQL,
    FormalInstructionPercentageOfAnnualHoursPerActivityGQL,
    FormalInstructionPercentageOfAnnualHoursPerUserGQL,
    FormalInstructionPercentageOfTotalHoursPerActivityGQL,
    FormalInstructionPercentageOfTotalHoursPerUserGQL
} from './../generated/output';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AcademicAdministrationWorkloadPerUserGQL,
    CommunityInstructionWorkloadPerUserGQL,
    ExecutiveManagementWorkloadPerUserGQL,
    FormalInstructionWorkloadPerUserGQL,
    PersonnelDevelopmentWorkloadPerUserGQL,
    PublicServiceWorkloadPerUserGQL,
    ResearchWorkloadPerUserGQL,
    SupervisionWorkloadPerUserGQL
} from '../generated/output';

@Injectable({
    providedIn: 'root'
})
export class WorkloadService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private academicAdministrationWorkloadPerUserGql: AcademicAdministrationWorkloadPerUserGQL,
        private communityInstructionWorkloadPerUserGql: CommunityInstructionWorkloadPerUserGQL,
        private executiveManagementWorkloadPerUserGql: ExecutiveManagementWorkloadPerUserGQL,
        private formalInstructionWorkloadPerUserGql: FormalInstructionWorkloadPerUserGQL,
        private personnelDevelopmentWorkloadPerUserGql: PersonnelDevelopmentWorkloadPerUserGQL,
        private publicServiceWorkloadPerUserGql: PublicServiceWorkloadPerUserGQL,
        private researchWorkloadPerUserGql: ResearchWorkloadPerUserGQL,
        private supervisionWorkloadPerUserGql: SupervisionWorkloadPerUserGQL,
        private teachingHoursGql: TeachingHoursGQL,
        private researchHoursGql: ResearchHoursGQL,
        private serviceHoursGql: ServiceHoursGQL,
        private annualHoursGql: AnnualHoursGQL,
        private totalHoursPerUserGql: TotalHoursPerUserGQL,
        private academicAdministrationGlobalTarrifGql: AcademicAdministrationGlobalTarrifGQL,
        private academicAdministrationTotalHoursPerActivityGql: AcademicAdministrationTotalHoursPerActivityGQL,
        private academicAdministrationTotalHoursPerUserGql: AcademicAdministrationTotalHoursPerUserGQL,
        private academicAdministrationPercentageOfWorkFocusPerActivityGql: AcademicAdministrationPercentageOfWorkFocusPerActivityGQL,
        private academicAdministrationPercentageOfWorkFocusPerUserGql: AcademicAdministrationPercentageOfWorkFocusPerUserGQL,
        private academicAdministrationPercentageOfAnnualHoursPerActivityGql: AcademicAdministrationPercentageOfAnnualHoursPerActivityGQL,
        private academicAdministrationPercentageOfAnnualHoursPerUserGql: AcademicAdministrationPercentageOfAnnualHoursPerUserGQL,
        private academicAdministrationPercentageOfTotalHoursPerActivityGql: AcademicAdministrationPercentageOfTotalHoursPerActivityGQL,
        private academicAdministrationPercentageOfTotalHoursPerUserGql: AcademicAdministrationPercentageOfTotalHoursPerUserGQL,
        private communityInstructionGlobalTarrifGql: CommunityInstructionGlobalTarrifGQL,
        private communityInstructionTotalHoursPerActivityGql: CommunityInstructionTotalHoursPerActivityGQL,
        private communityInstructionTotalHoursPerUserGql: CommunityInstructionTotalHoursPerUserGQL,
        private communityInstructionPercentageOfWorkFocusPerActivityGql: CommunityInstructionPercentageOfWorkFocusPerActivityGQL,
        private communityInstructionPercentageOfWorkFocusPerUserGql: CommunityInstructionPercentageOfWorkFocusPerUserGQL,
        private communityInstructionPercentageOfAnnualHoursPerActivityGql: CommunityInstructionPercentageOfAnnualHoursPerActivityGQL,
        private communityInstructionPercentageOfAnnualHoursPerUserGql: CommunityInstructionPercentageOfAnnualHoursPerUserGQL,
        private communityInstructionPercentageOfTotalHoursPerActivityGql: CommunityInstructionPercentageOfTotalHoursPerActivityGQL,
        private communityInstructionPercentageOfTotalHoursPerUserGql: CommunityInstructionPercentageOfTotalHoursPerUserGQL,
        private executiveManagementGlobalTarrifGql: ExecutiveManagementGlobalTarrifGQL,
        private executiveManagementTotalHoursPerActivityGql: ExecutiveManagementTotalHoursPerActivityGQL,
        private executiveManagementTotalHoursPerUserGql: ExecutiveManagementTotalHoursPerUserGQL,
        private executiveManagementPercentageOfWorkFocusPerActivityGql: ExecutiveManagementPercentageOfWorkFocusPerActivityGQL,
        private executiveManagementPercentageOfWorkFocusPerUserGql: ExecutiveManagementPercentageOfWorkFocusPerUserGQL,
        private executiveManagementPercentageOfAnnualHoursPerActivityGql: ExecutiveManagementPercentageOfAnnualHoursPerActivityGQL,
        private executiveManagementPercentageOfAnnualHoursPerUserGql: ExecutiveManagementPercentageOfAnnualHoursPerUserGQL,
        private executiveManagementPercentageOfTotalHoursPerActivityGql: ExecutiveManagementPercentageOfTotalHoursPerActivityGQL,
        private executiveManagementPercentageOfTotalHoursPerUserGql: ExecutiveManagementPercentageOfTotalHoursPerUserGQL,
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
        private formalInstructionPercentageOfAnnualHoursPerUserGql: FormalInstructionPercentageOfAnnualHoursPerUserGQL,
        private formalInstructionPercentageOfTotalHoursPerActivityGql: FormalInstructionPercentageOfTotalHoursPerActivityGQL,
        private formalInstructionPercentageOfTotalHoursPerUserGql: FormalInstructionPercentageOfTotalHoursPerUserGQL,
        private personnelDevelopmentGlobalTarrifGql: PersonnelDevelopmentGlobalTarrifGQL,
        private personnelDevelopmentTotalHoursPerActivityGql: PersonnelDevelopmentTotalHoursPerActivityGQL,
        private personnelDevelopmentTotalHoursPerUserGql: PersonnelDevelopmentTotalHoursPerUserGQL,
        private personnelDevelopmentPercentageOfWorkFocusPerActivityGql: PersonnelDevelopmentPercentageOfWorkFocusPerActivityGQL,
        private personnelDevelopmentPercentageOfWorkFocusPerUserGql: PersonnelDevelopmentPercentageOfWorkFocusPerUserGQL,
        private personnelDevelopmentPercentageOfAnnualHoursPerActivityGql: PersonnelDevelopmentPercentageOfAnnualHoursPerActivityGQL,
        private personnelDevelopmentPercentageOfAnnualHoursPerUserGql: PersonnelDevelopmentPercentageOfAnnualHoursPerUserGQL,
        private personnelDevelopmentPercentageOfTotalHoursPerActivityGql: PersonnelDevelopmentPercentageOfTotalHoursPerActivityGQL,
        private personnelDevelopmentPercentageOfTotalHoursPerUserGql: PersonnelDevelopmentPercentageOfTotalHoursPerUserGQL,
        private publicServiceGlobalTarrifGql: PublicServiceGlobalTarrifGQL,
        private publicServiceTotalHoursPerActivityGql: PublicServiceTotalHoursPerActivityGQL,
        private publicServiceTotalHoursPerUserGql: PublicServiceTotalHoursPerUserGQL,
        private publicServicePercentageOfWorkFocusPerActivityGql: PublicServicePercentageOfWorkFocusPerActivityGQL,
        private publicServicePercentageOfWorkFocusPerUserGql: PublicServicePercentageOfWorkFocusPerUserGQL,
        private publicServicePercentageOfAnnualHoursPerActivityGql: PublicServicePercentageOfAnnualHoursPerActivityGQL,
        private publicServicePercentageOfAnnualHoursPerUserGql: PublicServicePercentageOfAnnualHoursPerUserGQL,
        private publicServicePercentageOfTotalHoursPerActivityGql: PublicServicePercentageOfTotalHoursPerActivityGQL,
        private publicServicePercentageOfTotalHoursPerUserGql: PublicServicePercentageOfTotalHoursPerUserGQL,
        private researchGlobalTarrifGql: ResearchGlobalTarrifGQL,
        private researchTotalHoursPerActivityGql: ResearchTotalHoursPerActivityGQL,
        private researchTotalHoursPerUserGql: ResearchTotalHoursPerUserGQL,
        private researchPercentageOfWorkFocusPerActivityGql: ResearchPercentageOfWorkFocusPerActivityGQL,
        private researchPercentageOfWorkFocusPerUserGql: ResearchPercentageOfWorkFocusPerUserGQL,
        private researchPercentageOfAnnualHoursPerActivityGql: ResearchPercentageOfAnnualHoursPerActivityGQL,
        private researchPercentageOfAnnualHoursPerUserGql: ResearchPercentageOfAnnualHoursPerUserGQL,
        private researchPercentageOfTotalHoursPerActivityGql: ResearchPercentageOfTotalHoursPerActivityGQL,
        private researchPercentageOfTotalHoursPerUserGql: ResearchPercentageOfTotalHoursPerUserGQL,
        private supervisionGlobalTarrifGql: SupervisionGlobalTarrifGQL,
        private supervisionTotalHoursPerActivityGql: SupervisionTotalHoursPerActivityGQL,
        private supervisionTotalHoursPerUserGql: SupervisionTotalHoursPerUserGQL,
        private supervisionPercentageOfWorkFocusPerActivityGql: SupervisionPercentageOfWorkFocusPerActivityGQL,
        private supervisionPercentageOfWorkFocusPerUserGql: SupervisionPercentageOfWorkFocusPerUserGQL,
        private supervisionPercentageOfAnnualHoursPerActivityGql: SupervisionPercentageOfAnnualHoursPerActivityGQL,
        private supervisionPercentageOfAnnualHoursPerUserGql: SupervisionPercentageOfAnnualHoursPerUserGQL,
        private supervisionPercentageOfTotalHoursPerActivityGql: SupervisionPercentageOfTotalHoursPerActivityGQL,
        private supervisionPercentageOfTotalHoursPerUserGql: SupervisionPercentageOfTotalHoursPerUserGQL
    ) {}

    // Per User Bulk Workloads
    academicAdministrationWorkloadPerUser(userId: string) {
        return this.academicAdministrationWorkloadPerUserGql
            .watch({ userId: userId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    communityInstructionWorkloadPerUser(userId: string) {
        return this.communityInstructionWorkloadPerUserGql
            .watch({ userId: userId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    executiveManagementWorkloadPerUser(userId: string) {
        return this.executiveManagementWorkloadPerUserGql
            .watch({ userId: userId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    formalInstructionWorkloadPerUser(userId: string) {
        return this.formalInstructionWorkloadPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    personnelDevelopmentWorkloadPerUser(userId: string) {
        return this.personnelDevelopmentWorkloadPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    publicServiceWorkloadPerUser(userId: string) {
        return this.publicServiceWorkloadPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    researchWorkloadPerUser(userId: string) {
        return this.researchWorkloadPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    supervisionWorkloadPerUser(userId: string) {
        return this.supervisionWorkloadPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    // General Data
    teachingHours(userId: string) {
        return this.teachingHoursGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    researchHours(userId: string) {
        return this.researchHoursGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    serviceHours(userId: string) {
        return this.serviceHoursGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    annualHours() {
        return this.annualHoursGql
            .watch({}, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    totalHoursPerUser(userId: string) {
        return this.totalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    // Academic Administration
    academicAdministrationGlobalTarrif() {
        this.academicAdministrationGlobalTarrifGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationTotalHoursPerActivity(activityId: string) {
        this.academicAdministrationTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationTotalHoursPerUser(userId: string) {
        this.academicAdministrationTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationPercentageOfWorkFocusPerActivity(activityId: string) {
        this.academicAdministrationPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationPercentageOfWorkFocusPerUser(userId: string) {
        this.academicAdministrationPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationPercentageOfAnnualHoursPerActivity(
        activityId: string
    ) {
        this.academicAdministrationPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationPercentageOfAnnualHoursPerUser(userId: string) {
        this.academicAdministrationPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationPercentageOfTotalHoursPerActivity(
        activityId: string
    ) {
        this.academicAdministrationPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    academicAdministrationPercentageOfTotalHoursPerUser(userId: string) {
        this.academicAdministrationPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    // Community Instruction
    communityInstructionGlobalTarrif() {
        this.communityInstructionGlobalTarrifGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionTotalHoursPerActivity(activityId: string) {
        this.communityInstructionTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionTotalHoursPerUser(userId: string) {
        this.communityInstructionTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionPercentageOfWorkFocusPerActivity(activityId: string) {
        this.communityInstructionPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionPercentageOfWorkFocusPerUser(userId: string) {
        this.communityInstructionPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionPercentageOfAnnualHoursPerActivity(activityId: string) {
        this.communityInstructionPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionPercentageOfAnnualHoursPerUser(userId: string) {
        this.communityInstructionPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionPercentageOfTotalHoursPerActivity(activityId: string) {
        this.communityInstructionPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    communityInstructionPercentageOfTotalHoursPerUser(userId: string) {
        this.communityInstructionPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    // Executive Management
    executiveManagementGlobalTarrif() {
        this.executiveManagementGlobalTarrifGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementTotalHoursPerActivity(activityId: string) {
        this.executiveManagementTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementTotalHoursPerUser(userId: string) {
        this.executiveManagementTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementPercentageOfWorkFocusPerActivity(activityId: string) {
        this.executiveManagementPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementPercentageOfWorkFocusPerUser(userId: string) {
        this.executiveManagementPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementPercentageOfAnnualHoursPerActivity(activityId: string) {
        this.executiveManagementPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementPercentageOfAnnualHoursPerUser(userId: string) {
        this.executiveManagementPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementPercentageOfTotalHoursPerActivity(activityId: string) {
        this.executiveManagementPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    executiveManagementPercentageOfTotalHoursPerUser(userId: string) {
        this.executiveManagementPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    // Formal Instruction
    formalInstructionLectureWeeks(activityId: string) {
        this.formalInstructionLectureWeeksGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionStudentsEnrolled(activityId: string) {
        this.formalInstructionStudentsEnrolledGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionBaseContactHours(activityId: string) {
        this.formalInstructionBaseContactHoursEnrolledGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionCoordinationHours(activityId: string) {
        this.formalInstructionCoordinationHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionStudentSupportHours(activityId: string) {
        this.formalInstructionStudentSupportHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPreparationTimeHours(activityId: string) {
        this.formalInstructionPreparationTimeHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionAssessmentSettingHours(activityId: string) {
        this.formalInstructionAssessmentSettingHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionExamMarkingHours(activityId: string) {
        this.formalInstructionExamMarkingHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionCourseworkMarkingHours(activityId: string) {
        this.formalInstructionCourseworkMarkingHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionFeedbackHours(activityId: string) {
        this.formalInstructionFeedbackHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionFormativeAssessmentHours(activityId: string) {
        this.formalInstructionFormativeAssessmentHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionModerationHours(activityId: string) {
        this.formalInstructionModerationHoursGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionTotalHoursPerActivity(activityId: string) {
        this.formalInstructionTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionOtherHoursPerActivity(activityId: string) {
        this.formalInstructionOtherHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionTotalHoursPerUser(userId: string) {
        this.formalInstructionTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPercentageOfWorkFocusPerActivity(activityId: string) {
        this.formalInstructionPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPercentageOfWorkFocusPerUser(userId: string) {
        this.formalInstructionPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPercentageOfAnnualHoursPerActivity(activityId: string) {
        this.formalInstructionPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPercentageOfAnnualHoursPerUser(userId: string) {
        this.formalInstructionPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPercentageOfTotalHoursPerActivity(activityId: string) {
        this.formalInstructionPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    formalInstructionPercentageOfTotalHoursPerUser(userId: string) {
        this.formalInstructionPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    // Personnel Development
    personnelDevelopmentGlobalTarrif() {
        this.personnelDevelopmentGlobalTarrifGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentTotalHoursPerActivity(activityId: string) {
        this.personnelDevelopmentTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentTotalHoursPerUser(userId: string) {
        this.personnelDevelopmentTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentPercentageOfWorkFocusPerActivity(activityId: string) {
        this.personnelDevelopmentPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentPercentageOfWorkFocusPerUser(userId: string) {
        this.personnelDevelopmentPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentPercentageOfAnnualHoursPerActivity(activityId: string) {
        this.personnelDevelopmentPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentPercentageOfAnnualHoursPerUser(userId: string) {
        this.personnelDevelopmentPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentPercentageOfTotalHoursPerActivity(activityId: string) {
        this.personnelDevelopmentPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    personnelDevelopmentPercentageOfTotalHoursPerUser(userId: string) {
        this.personnelDevelopmentPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    // Research
    researchGlobalTarrif() {
        this.researchGlobalTarrifGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchTotalHoursPerActivity(activityId: string) {
        this.researchTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchTotalHoursPerUser(userId: string) {
        this.researchTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchPercentageOfWorkFocusPerActivity(activityId: string) {
        this.researchPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchPercentageOfWorkFocusPerUser(userId: string) {
        this.researchPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchPercentageOfAnnualHoursPerActivity(activityId: string) {
        this.researchPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchPercentageOfAnnualHoursPerUser(userId: string) {
        this.researchPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchPercentageOfTotalHoursPerActivity(activityId: string) {
        this.researchPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    researchPercentageOfTotalHoursPerUser(userId: string) {
        this.researchPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    // Supervision
    supervisionGlobalTarrif() {
        this.supervisionGlobalTarrifGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionTotalHoursPerActivity(activityId: string) {
        this.supervisionTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionTotalHoursPerUser(userId: string) {
        this.supervisionTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionPercentageOfWorkFocusPerActivity(activityId: string) {
        this.supervisionPercentageOfWorkFocusPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionPercentageOfWorkFocusPerUser(userId: string) {
        this.supervisionPercentageOfWorkFocusPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionPercentageOfAnnualHoursPerActivity(activityId: string) {
        this.supervisionPercentageOfAnnualHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionPercentageOfAnnualHoursPerUser(userId: string) {
        this.supervisionPercentageOfAnnualHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionPercentageOfTotalHoursPerActivity(activityId: string) {
        this.supervisionPercentageOfTotalHoursPerActivityGql
            .watch({ activityId: activityId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    supervisionPercentageOfTotalHoursPerUser(userId: string) {
        this.supervisionPercentageOfTotalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
}
