import { map } from 'rxjs/operators';
import {
    AcademicAdministrationActivitiesByUserGQL,
    AcademicAdministrationActivitiesGQL,
    AcademicAdministrationActivityGQL,
    AcademicAdministrationActivityInput,
    AddAcademicAdministrationActivityGQL,
    DeleteAcademicAdministrationActivityGQL,
    EditAcademicAdministrationActivityGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AcademicAdministrationService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private academicAdministrationActivityGql: AcademicAdministrationActivityGQL,
        private academicAdministrationActivitiesGql: AcademicAdministrationActivitiesGQL,
        private academicAdministrationActivitiesByUserGql: AcademicAdministrationActivitiesByUserGQL,
        private addacademicAdministrationActivityGql: AddAcademicAdministrationActivityGQL,
        private editacademicAdministrationActivityGql: EditAcademicAdministrationActivityGQL,
        private deleteacademicAdministrationActivityGql: DeleteAcademicAdministrationActivityGQL
    ) {}

    academicAdministrationActivity(activityId: string) {
        return this.academicAdministrationActivityGql
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
    academicAdministrationActivities() {
        return this.academicAdministrationActivitiesGql
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
    academicAdministrationActivitiesByUser(userId: string) {
        return this.academicAdministrationActivitiesByUserGql
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
    addAcademicAdministrationActivity(
        academicAdministrationActivity: AcademicAdministrationActivityInput
    ) {
        return this.addacademicAdministrationActivityGql
            .mutate({
                academicAdministrationActivity: academicAdministrationActivity
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
    editAcademicAdministrationActivity(
        academicAdministrationActivity: AcademicAdministrationActivityInput
    ) {
        return this.editacademicAdministrationActivityGql
            .mutate({
                academicAdministrationActivity: academicAdministrationActivity
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
    deleteAcademicAdministrationActivity(
        academicAdministrationActivity: AcademicAdministrationActivityInput
    ) {
        return this.deleteacademicAdministrationActivityGql
            .mutate({
                academicAdministrationActivity: academicAdministrationActivity
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
