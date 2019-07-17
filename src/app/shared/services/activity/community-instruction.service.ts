import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddCommunityInstructionActivityGQL,
    DeleteCommunityInstructionActivityGQL,
    EditCommunityInstructionActivityGQL,
    CommunityInstructionActivitiesByUserGQL,
    CommunityInstructionActivitiesGQL,
    CommunityInstructionActivityGQL,
    CommunityInstructionActivityInput
} from '../../generated/output';

@Injectable({
    providedIn: 'root'
})
export class CommunityInstructionService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private communityInstructionActivityGql: CommunityInstructionActivityGQL,
        private communityInstructionActivitiesGql: CommunityInstructionActivitiesGQL,
        private communityInstructionActivitiesByUserGql: CommunityInstructionActivitiesByUserGQL,
        private addcommunityInstructionActivityGql: AddCommunityInstructionActivityGQL,
        private editcommunityInstructionActivityGql: EditCommunityInstructionActivityGQL,
        private deletecommunityInstructionActivityGql: DeleteCommunityInstructionActivityGQL
    ) {}

    communityInstructionActivity(activityId: string) {
        return this.communityInstructionActivityGql
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
    communityInstructionActivities() {
        return this.communityInstructionActivitiesGql
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
    communityInstructionActivitiesByUser(userId: string) {
        return this.communityInstructionActivitiesByUserGql
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
    addCommunityInstructionActivity(
        communityInstructionActivity: CommunityInstructionActivityInput
    ) {
        return this.addcommunityInstructionActivityGql
            .mutate({
                communityInstructionActivity: communityInstructionActivity
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
    editCommunityInstructionActivity(
        communityInstructionActivity: CommunityInstructionActivityInput
    ) {
        return this.editcommunityInstructionActivityGql
            .mutate({
                communityInstructionActivity: communityInstructionActivity
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
    deleteCommunityInstructionActivity(
        communityInstructionActivity: CommunityInstructionActivityInput
    ) {
        return this.deletecommunityInstructionActivityGql
            .mutate({
                communityInstructionActivity: communityInstructionActivity
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
