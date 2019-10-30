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
    executiveManagementActivities() {
        return this.executiveManagementActivitiesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
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
    executiveManagementActivitiesByUser(userId: string) {
        return this.executiveManagementActivitiesByUserGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
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
    addExecutiveManagementActivity(activity: ExecutiveManagementActivityInput) {
        return this.addexecutiveManagementActivityGql
            .mutate({
                activity: activity
            })
            .pipe(
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
    editExecutiveManagementActivity(
        activity: ExecutiveManagementActivityInput
    ) {
        return this.editexecutiveManagementActivityGql
            .mutate({
                activity: activity
            })
            .pipe(
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
    deleteExecutiveManagementActivity(
        activity: ExecutiveManagementActivityInput
    ) {
        return this.deleteexecutiveManagementActivityGql
            .mutate({
                activity: activity
            })
            .pipe(
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
