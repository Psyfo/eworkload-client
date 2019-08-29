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

    public titles = [
        { label: 'Programme coordinator', value: 'Programme coordinator' },
        {
            label: 'Servicing subject coordinator',
            value: 'Servicing subject coordinator'
        },
        { label: 'Timetabling', value: 'Timetabling' },
        { label: 'Selection', value: 'Selection' },
        { label: 'Test and Exams schedule', value: 'Test and Exams schedule' },
        { label: 'Registration set up', value: 'Registration set up' },
        { label: 'TLA Chairperson', value: 'TLA Chairperson' },
        { label: 'Quality rep', value: 'Quality rep' },
        {
            label: 'Marketing/schools outreach',
            value: 'Marketing/schools outreach'
        },
        {
            label: 'Documentation/rules/handbook',
            value: 'Documentation/rules/handbook'
        }
    ];

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
        activity: AcademicAdministrationActivityInput
    ) {
        return this.addacademicAdministrationActivityGql
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
    editAcademicAdministrationActivity(
        activity: AcademicAdministrationActivityInput
    ) {
        return this.editacademicAdministrationActivityGql
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
    deleteAcademicAdministrationActivity(
        activity: AcademicAdministrationActivityInput
    ) {
        return this.deleteacademicAdministrationActivityGql
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
