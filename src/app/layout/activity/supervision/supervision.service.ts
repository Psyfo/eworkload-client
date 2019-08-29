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

    public supervisionRoles = [
        { label: 'Supervisor', value: 'Supervisor' },
        { label: 'Co-Supervisor', value: 'Co-Supervisor' }
    ];
    public splits = [
        { label: '25%', value: 25 },
        { label: '50%', value: 50 },
        { label: '75%', value: 75 },
        { label: '100%', value: 100 }
    ];

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
    addSupervisionActivity(activity: SupervisionActivityInput) {
        return this.addsupervisionActivityGql
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
    editSupervisionActivity(activity: SupervisionActivityInput) {
        return this.editsupervisionActivityGql
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
    deleteSupervisionActivity(activity: SupervisionActivityInput) {
        return this.deletesupervisionActivityGql
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
