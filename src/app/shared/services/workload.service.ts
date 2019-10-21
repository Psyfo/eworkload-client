import { Subject, combineLatest, merge, concat } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AcademicAdministrationWorkloadGQL,
    AnnualHoursGQL,
    CommunityInstructionWorkloadGQL,
    ExecutiveManagementWorkloadGQL,
    FormalInstructionWorkloadGQL,
    PersonnelDevelopmentWorkloadGQL,
    PublicServiceWorkloadGQL,
    ResearchHoursGQL,
    ResearchHoursPerUserGQL,
    ResearchWorkloadGQL,
    ServiceHoursGQL,
    ServiceHoursPerUserGQL,
    SupervisionWorkloadGQL,
    TeachingHoursGQL,
    TeachingHoursPerUserGQL,
    TotalHoursPerUserGQL,
    WorkloadSummariesGQL
} from '../generated/output';

@Injectable({
    providedIn: 'root'
})
export class WorkloadService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private academicAdministrationWorkloadGql: AcademicAdministrationWorkloadGQL,
        private communityInstructionWorkloadGql: CommunityInstructionWorkloadGQL,
        private executiveManagementWorkloadGql: ExecutiveManagementWorkloadGQL,
        private formalInstructionWorkloadGql: FormalInstructionWorkloadGQL,
        private personnelDevelopmentWorkloadGql: PersonnelDevelopmentWorkloadGQL,
        private publicServiceWorkloadGql: PublicServiceWorkloadGQL,
        private researchWorkloadGql: ResearchWorkloadGQL,
        private supervisionWorkloadGql: SupervisionWorkloadGQL,
        private teachingHoursGql: TeachingHoursGQL,
        private researchHoursGql: ResearchHoursGQL,
        private serviceHoursGql: ServiceHoursGQL,
        private annualHoursGql: AnnualHoursGQL,
        private totalHoursPerUserGql: TotalHoursPerUserGQL,
        private teachingHoursPerUserGql: TeachingHoursPerUserGQL,
        private researchHoursPerUserGql: ResearchHoursPerUserGQL,
        private serviceHoursPerUserGql: ServiceHoursPerUserGQL,
        private workloadSummariesGql: WorkloadSummariesGQL
    ) {}

    // Per User Bulk Workloads
    academicAdministrationWorkload(userId: string) {
        return this.academicAdministrationWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    communityInstructionWorkload(userId: string) {
        return this.communityInstructionWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    executiveManagementWorkload(userId: string) {
        return this.executiveManagementWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    formalInstructionWorkload(userId: string) {
        return this.formalInstructionWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    personnelDevelopmentWorkload(userId: string) {
        return this.personnelDevelopmentWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    publicServiceWorkload(userId: string) {
        return this.publicServiceWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    researchWorkload(userId: string) {
        return this.researchWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    supervisionWorkload(userId: string) {
        return this.supervisionWorkloadGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    teachingWorkload(userId: string) {
        const formalInstructionWorkload = this.formalInstructionWorkload(
            userId
        );
        const supervisionWorkload = this.supervisionWorkload(userId);

        const teachingWorkload = combineLatest(
            formalInstructionWorkload,
            supervisionWorkload
        ).pipe(
            map(([fi, s]) => {
                const teachingWorkload = {
                    formalInstructionWorkload:
                        fi.data.formalInstructionWorkload,
                    supervisionWorkload: s.data.supervisionWorkload
                };

                return teachingWorkload;
            })
        );

        return teachingWorkload;
    }
    serviceWorkload(userId: string) {
        const aaWorkload = this.academicAdministrationWorkload(userId);
        const ciWorkload = this.communityInstructionWorkload(userId);
        const emWorkload = this.executiveManagementWorkload(userId);
        const pdWorkload = this.personnelDevelopmentWorkload(userId);
        const psWorkload = this.publicServiceWorkload(userId);

        const serviceWorkload = combineLatest(
            aaWorkload,
            ciWorkload,
            emWorkload,
            pdWorkload,
            psWorkload
        ).pipe(
            map(([aa, ci, em, pd, ps]) => {
                const serviceWorkload = {
                    academicAdministrationWorkload:
                        aa.data.academicAdministrationWorkload,
                    communityInstructionWorkload:
                        ci.data.communityInstructionWorkload,
                    executiveManagementWorkload:
                        em.data.executiveManagementWorkload,
                    personnelDevelopmentWorkload:
                        pd.data.personnelDevelopmentWorkload,
                    publicServiceWorkload: ps.data.publicServiceWorkload
                };

                return serviceWorkload;
            })
        );

        return serviceWorkload;
    }
    hemisWorkload(userId: string) {
        const aaWorkload = this.academicAdministrationWorkload(userId);
        const ciWorkload = this.communityInstructionWorkload(userId);
        const emWorkload = this.executiveManagementWorkload(userId);
        const fiWorkload = this.formalInstructionWorkload(userId);
        const pdWorkload = this.personnelDevelopmentWorkload(userId);
        const psWorkload = this.publicServiceWorkload(userId);
        const rWorkload = this.researchWorkload(userId);
        const sWorkload = this.supervisionWorkload(userId);

        
    }

    // General Data
    teachingHours(userId: string) {
        return this.teachingHoursGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    researchHours(userId: string) {
        return this.researchHoursGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    serviceHours(userId: string) {
        return this.serviceHoursGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    annualHours() {
        return this.annualHoursGql
            .watch({}, { pollInterval: 1000 })
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
    totalHoursPerUser(userId: string) {
        return this.totalHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    teachingHoursPerUser(userId: string) {
        return this.teachingHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    researchHoursPerUser(userId: string) {
        return this.researchHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    serviceHoursPerUser(userId: string) {
        return this.serviceHoursPerUserGql
            .watch({ userId: userId }, { pollInterval: 1000 })
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
    workloadSummaries() {
        return this.workloadSummariesGql
            .watch({}, { pollInterval: 1000 })
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
