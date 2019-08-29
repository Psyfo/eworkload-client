import { map } from 'rxjs/operators';
import {
    AddCommunityInstructionActivityGQL,
    CommunityInstructionActivitiesByUserGQL,
    CommunityInstructionActivitiesGQL,
    CommunityInstructionActivityGQL,
    CommunityInstructionActivityInput,
    DeleteCommunityInstructionActivityGQL,
    EditCommunityInstructionActivityGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

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
        activity: CommunityInstructionActivityInput
    ) {
        return this.addcommunityInstructionActivityGql
            .mutate({
                activity: activity
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
        activity: CommunityInstructionActivityInput
    ) {
        return this.editcommunityInstructionActivityGql
            .mutate({
                activity: activity
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
        activity: CommunityInstructionActivityInput
    ) {
        return this.deletecommunityInstructionActivityGql
            .mutate({
                activity: activity
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
