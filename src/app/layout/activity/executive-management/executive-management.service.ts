import { map } from 'rxjs/operators';
import {
    AddExecutiveManagementActivityGQL,
    DeleteExecutiveManagementActivityGQL,
    EditExecutiveManagementActivityGQL,
    ExecutiveManagementActivitiesByUserGQL,
    ExecutiveManagementActivitiesGQL,
    ExecutiveManagementActivityGQL,
    ExecutiveManagementActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExecutiveManagementService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private executiveManagementActivityGql: ExecutiveManagementActivityGQL,
        private executiveManagementActivitiesGql: ExecutiveManagementActivitiesGQL,
        private executiveManagementActivitiesByUserGql: ExecutiveManagementActivitiesByUserGQL,
        private addexecutiveManagementActivityGql: AddExecutiveManagementActivityGQL,
        private editexecutiveManagementActivityGql: EditExecutiveManagementActivityGQL,
        private deleteexecutiveManagementActivityGql: DeleteExecutiveManagementActivityGQL
    ) {}

    executiveManagementActivity(activityId: string) {
        return this.executiveManagementActivityGql
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
    executiveManagementActivities() {
        return this.executiveManagementActivitiesGql
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
    executiveManagementActivitiesByUser(userId: string) {
        return this.executiveManagementActivitiesByUserGql
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
    addExecutiveManagementActivity(
        executiveManagementActivity: ExecutiveManagementActivityInput
    ) {
        return this.addexecutiveManagementActivityGql
            .mutate({
                executiveManagementActivity: executiveManagementActivity
            })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editExecutiveManagementActivity(
        executiveManagementActivity: ExecutiveManagementActivityInput
    ) {
        return this.editexecutiveManagementActivityGql
            .mutate({
                executiveManagementActivity: executiveManagementActivity
            })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    deleteExecutiveManagementActivity(
        executiveManagementActivity: ExecutiveManagementActivityInput
    ) {
        return this.deleteexecutiveManagementActivityGql
            .mutate({
                executiveManagementActivity: executiveManagementActivity
            })
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
