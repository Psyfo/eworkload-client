import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddResearchActivityGQL,
    DeleteResearchActivityGQL,
    EditResearchActivityGQL,
    ResearchActivitiesByUserGQL,
    ResearchActivitiesGQL,
    ResearchActivityGQL,
    ResearchActivityInput
} from '../../generated/output';

@Injectable({
    providedIn: 'root'
})
export class ResearchService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private researchActivityGql: ResearchActivityGQL,
        private researchActivitiesGql: ResearchActivitiesGQL,
        private researchActivitiesByUserGql: ResearchActivitiesByUserGQL,
        private addresearchActivityGql: AddResearchActivityGQL,
        private editresearchActivityGql: EditResearchActivityGQL,
        private deleteresearchActivityGql: DeleteResearchActivityGQL
    ) {}

    researchActivity(activityId: string) {
        return this.researchActivityGql
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
    researchActivities() {
        return this.researchActivitiesGql
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
    researchActivitiesByUser(userId: string) {
        return this.researchActivitiesByUserGql
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
    addResearchActivity(researchActivity: ResearchActivityInput) {
        return this.addresearchActivityGql
            .mutate({ researchActivity: researchActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editResearchActivity(researchActivity: ResearchActivityInput) {
        return this.editresearchActivityGql
            .mutate({ researchActivity: researchActivity })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    deleteResearchActivity(researchActivity: ResearchActivityInput) {
        return this.deleteresearchActivityGql
            .mutate({ researchActivity: researchActivity })
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
