import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    ActivityGQL,
    ActivitiesByUnapprovedGQL
} from 'src/app/shared/generated';

@Injectable({
    providedIn: 'root'
})
export class ActivityService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    public outputTypes = [
        'Conference Proceedings',
        'Keynote Address',
        'Journal',
        'Books',
        'Chapter',
        'Patent'
    ];

    constructor(
        private activityGql: ActivityGQL,
        private activitiesByUnapprovedGql: ActivitiesByUnapprovedGQL
    ) {}

    getActivity(activityId: string) {
        return this.activityGql
            .watch(
                { activityId: activityId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    getActivitiesByUnapproved() {
        return this.activitiesByUnapprovedGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    getActivitiesByApproved() {
        return this.activitiesByUnapprovedGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }
}
