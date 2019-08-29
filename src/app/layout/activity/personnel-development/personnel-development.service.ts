import { map } from 'rxjs/operators';
import {
    AddPersonnelDevelopmentActivityGQL,
    DeletePersonnelDevelopmentActivityGQL,
    EditPersonnelDevelopmentActivityGQL,
    PersonnelDevelopmentActivitiesByUserGQL,
    PersonnelDevelopmentActivitiesGQL,
    PersonnelDevelopmentActivityGQL,
    PersonnelDevelopmentActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PersonnelDevelopmentService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private personnelDevelopmentActivityGql: PersonnelDevelopmentActivityGQL,
        private personnelDevelopmentActivitiesGql: PersonnelDevelopmentActivitiesGQL,
        private personnelDevelopmentActivitiesByUserGql: PersonnelDevelopmentActivitiesByUserGQL,
        private addpersonnelDevelopmentActivityGql: AddPersonnelDevelopmentActivityGQL,
        private editpersonnelDevelopmentActivityGql: EditPersonnelDevelopmentActivityGQL,
        private deletepersonnelDevelopmentActivityGql: DeletePersonnelDevelopmentActivityGQL
    ) {}

    personnelDevelopmentActivity(activityId: string) {
        return this.personnelDevelopmentActivityGql
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
    personnelDevelopmentActivities() {
        return this.personnelDevelopmentActivitiesGql
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
    personnelDevelopmentActivitiesByUser(userId: string) {
        return this.personnelDevelopmentActivitiesByUserGql
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
    addPersonnelDevelopmentActivity(
        activity: PersonnelDevelopmentActivityInput
    ) {
        return this.addpersonnelDevelopmentActivityGql
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
    editPersonnelDevelopmentActivity(
        activity: PersonnelDevelopmentActivityInput
    ) {
        return this.editpersonnelDevelopmentActivityGql
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
    deletePersonnelDevelopmentActivity(
        activity: PersonnelDevelopmentActivityInput
    ) {
        return this.deletepersonnelDevelopmentActivityGql
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
