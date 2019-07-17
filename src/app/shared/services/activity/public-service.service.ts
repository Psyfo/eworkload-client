import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddPublicServiceActivityGQL,
    DeletePublicServiceActivityGQL,
    EditPublicServiceActivityGQL,
    PublicServiceActivitiesByUserGQL,
    PublicServiceActivitiesGQL,
    PublicServiceActivityGQL,
    PublicServiceActivityInput
} from '../../generated/output';

@Injectable({
    providedIn: 'root'
})
export class PublicServiceService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private publicServiceActivityGql: PublicServiceActivityGQL,
        private publicServiceActivitiesGql: PublicServiceActivitiesGQL,
        private publicServiceActivitiesByUserGql: PublicServiceActivitiesByUserGQL,
        private addpublicServiceActivityGql: AddPublicServiceActivityGQL,
        private editpublicServiceActivityGql: EditPublicServiceActivityGQL,
        private deletepublicServiceActivityGql: DeletePublicServiceActivityGQL
    ) {}

    publicServiceActivity(activityId: string) {
        return this.publicServiceActivityGql
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
    publicServiceActivities() {
        return this.publicServiceActivitiesGql
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
    publicServiceActivitiesByUser(userId: string) {
        return this.publicServiceActivitiesByUserGql
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
    addPublicServiceActivity(
        publicServiceActivity: PublicServiceActivityInput
    ) {
        return this.addpublicServiceActivityGql
            .mutate({ publicServiceActivity: publicServiceActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editPublicServiceActivity(
        publicServiceActivity: PublicServiceActivityInput
    ) {
        return this.editpublicServiceActivityGql
            .mutate({ publicServiceActivity: publicServiceActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    deletePublicServiceActivity(
        publicServiceActivity: PublicServiceActivityInput
    ) {
        return this.deletepublicServiceActivityGql
            .mutate({ publicServiceActivity: publicServiceActivity })
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
