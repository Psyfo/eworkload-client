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
}
