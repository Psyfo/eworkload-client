import { map } from 'rxjs/operators';
import {
    AddSupervisionActivityGQL,
    DeleteSupervisionActivityGQL,
    EditSupervisionActivityGQL,
    SupervisionActivitiesByUserGQL,
    SupervisionActivitiesGQL,
    SupervisionActivityGQL,
    SupervisionActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SupervisionService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private supervisionActivityGql: SupervisionActivityGQL,
        private supervisionActivitiesGql: SupervisionActivitiesGQL,
        private supervisionActivitiesByUserGql: SupervisionActivitiesByUserGQL,
        private addsupervisionActivityGql: AddSupervisionActivityGQL,
        private editsupervisionActivityGql: EditSupervisionActivityGQL,
        private deletesupervisionActivityGql: DeleteSupervisionActivityGQL
    ) {}

    supervisionActivity(activityId: string) {
        return this.supervisionActivityGql
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
    supervisionActivities() {
        return this.supervisionActivitiesGql
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
    supervisionActivitiesByUser(userId: string) {
        return this.supervisionActivitiesByUserGql
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
    addSupervisionActivity(supervisionActivity: SupervisionActivityInput) {
        return this.addsupervisionActivityGql
            .mutate({ supervisionActivity: supervisionActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editSupervisionActivity(supervisionActivity: SupervisionActivityInput) {
        return this.editsupervisionActivityGql
            .mutate({ supervisionActivity: supervisionActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    deleteSupervisionActivity(supervisionActivity: SupervisionActivityInput) {
        return this.deletesupervisionActivityGql
            .mutate({ supervisionActivity: supervisionActivity })
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
