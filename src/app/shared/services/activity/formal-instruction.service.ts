import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddFormalInstructionActivityGQL,
    DeleteFormalInstructionActivityGQL,
    EditFormalInstructionActivityGQL,
    FormalInstructionActivitiesByUserGQL,
    FormalInstructionActivitiesGQL,
    FormalInstructionActivityGQL,
    FormalInstructionActivityInput
} from '../../generated/output';

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
        private deleteformalInstructionActivityGql: DeleteFormalInstructionActivityGQL
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
    addFormalInstructionActivity(
        formalInstructionActivity: FormalInstructionActivityInput
    ) {
        return this.addformalInstructionActivityGql
            .mutate({ formalInstructionActivity: formalInstructionActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editFormalInstructionActivity(
        formalInstructionActivity: FormalInstructionActivityInput
    ) {
        return this.editformalInstructionActivityGql
            .mutate({ formalInstructionActivity: formalInstructionActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    deleteFormalInstructionActivity(
        formalInstructionActivity: FormalInstructionActivityInput
    ) {
        return this.deleteformalInstructionActivityGql
            .mutate({ formalInstructionActivity: formalInstructionActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
}
