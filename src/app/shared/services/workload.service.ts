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
        private supervisionWorkloadPerUserGql: SupervisionWorkloadPerUserGQL
    ) {}

    academicAdministrationWorkloadPerUser(userId: string) {
        return this.academicAdministrationWorkloadPerUserGql
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
    communityInstructionWorkloadPerUser(userId: string) {
        return this.communityInstructionWorkloadPerUserGql
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
    executiveManagementWorkloadPerUser(userId: string) {
        return this.executiveManagementWorkloadPerUserGql
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
}
