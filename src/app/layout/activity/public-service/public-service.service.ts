import { map } from 'rxjs/operators';
import {
    AddPublicServiceActivityGQL,
    DeletePublicServiceActivityGQL,
    EditPublicServiceActivityGQL,
    PublicServiceActivitiesByUserGQL,
    PublicServiceActivitiesGQL,
    PublicServiceActivityGQL,
    PublicServiceActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

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
            .valueChanges.pipe(map(result => result, err => err));
    }
    publicServiceActivities() {
        return this.publicServiceActivitiesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }
    publicServiceActivitiesByUser(userId: string) {
        return this.publicServiceActivitiesByUserGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }
    addPublicServiceActivity(activity: PublicServiceActivityInput) {
        return this.addpublicServiceActivityGql
            .mutate({ activity: activity })
            .pipe(map(result => result, err => err));
    }
    editPublicServiceActivity(activity: PublicServiceActivityInput) {
        return this.editpublicServiceActivityGql
            .mutate({ activity: activity })
            .pipe(map(result => result, err => err));
    }
    deletePublicServiceActivity(activity: PublicServiceActivityInput) {
        return this.deletepublicServiceActivityGql
            .mutate({ activity: activity })
            .pipe(map(result => result, err => err));
    }
}
