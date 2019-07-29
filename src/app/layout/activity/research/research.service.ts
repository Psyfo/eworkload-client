import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';
import { map } from 'rxjs/operators';
import {
    AddResearchActivityGQL,
    DeleteResearchActivityGQL,
    EditResearchActivityGQL,
    ResearchActivitiesByUserGQL,
    ResearchActivitiesGQL,
    ResearchActivityGQL,
    ResearchActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResearchService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    public outputTypes: SelectItem[] = [
        { label: 'Conference Proceedings', value: 'Conference Proceedings' },
        { label: 'Journal', value: 'Journal' },
        { label: 'Book', value: 'Book' },
        { label: 'Chapter', value: 'Chapter' },
        { label: 'Patent', value: 'Patent' }
    ];

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
