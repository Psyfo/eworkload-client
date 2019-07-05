import { UnapprovedActivitiesGQL } from './../generated/output';
import { Injectable } from '@angular/core';

import {
    ActivityGQL,
    FormalInstructionActivitiesGQL,
    FormalInstructionActivityGQL,
    FormalInstructionActivitiesByUserGQL,
    ResearchActivitiesByUserGQL,
    AddFormalInstructionActivityGQL
} from '../generated/output';
import {
    CommInstructionActivity,
    FormalInstructionActivity,
    PublicServiceActivity,
    ResearchActivity,
    SupervisionActivity,
    FormalInstructionActivityInput
} from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ActivityService {
    researchActivity: ResearchActivity;
    supervisionActivity: SupervisionActivity;
    commInstructionActivity: CommInstructionActivity;
    publicServiceActivity: PublicServiceActivity;
    formalInstructionActivity: FormalInstructionActivity;

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
        private alertService: AlertService,
        private errorService: ErrorService,
        private activityGql: ActivityGQL,
        private formalInstructionActivityGql: FormalInstructionActivityGQL,
        private formalInstructionActivitiesGql: FormalInstructionActivitiesGQL,
        private formalInstructionActivitiesByUserGql: FormalInstructionActivitiesByUserGQL,
        private addFormalInstructionActivityGql: AddFormalInstructionActivityGQL,
        private researchActivitiesByUserGql: ResearchActivitiesByUserGQL,
        private unapprovedActivitiesGql: UnapprovedActivitiesGQL
    ) {}

    getActivity(activityId: string) {
        return this.activityGql
            .watch({ activityId: activityId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getUnapprovedActivities() {
        return this.unapprovedActivitiesGql.watch({}).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    getApprovedActivities() {
        return this.unapprovedActivitiesGql.watch({}).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    getFormalInstructionActivity(activityId: string) {
        return this.formalInstructionActivityGql
            .watch({ activityId: activityId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    getFormalInstructionActivityStatic(activityId: string) {
        return <FormalInstructionActivity>(
            (<unknown>this.formalInstructionActivityGql.fetch({
                activityId: activityId
            }))
        );
    }

    getFormalInstructionActivities() {
        return this.formalInstructionActivitiesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    getFormalInstructionActivitiesByUser(userId: string) {
        return this.formalInstructionActivitiesByUserGql
            .watch({ userId: userId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    addFormalInstructionActivity(
        formalInstructionActivity: FormalInstructionActivityInput
    ) {
        return this.addFormalInstructionActivityGql
            .mutate({ formalInstructionActivity: formalInstructionActivity })
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
