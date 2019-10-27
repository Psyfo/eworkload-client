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
    communityInstructionActivities() {
        return this.communityInstructionActivitiesGql
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
    communityInstructionActivitiesByUser(userId: string) {
        return this.communityInstructionActivitiesByUserGql
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
    addCommunityInstructionActivity(
        activity: CommunityInstructionActivityInput
    ) {
        return this.addcommunityInstructionActivityGql
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
    editCommunityInstructionActivity(
        activity: CommunityInstructionActivityInput
    ) {
        return this.editcommunityInstructionActivityGql
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
    deleteCommunityInstructionActivity(
        activity: CommunityInstructionActivityInput
    ) {
        return this.deletecommunityInstructionActivityGql
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
