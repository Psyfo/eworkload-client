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
        { label: 'Programme coordinator', value: '0' },
        {
            label: 'Year coordinator',
            value: '1'
        },
        { label: 'Timetabling', value: '2' },
        { label: 'Selection', value: '3' },
        { label: 'Test and Exams schedule', value: '4' },
        { label: 'Registration set up', value: '5' },
        { label: 'TLA Chairperson', value: '6' },
        { label: 'Quality rep', value: '7' },
        {
            label: 'Marketing/schools outreach',
            value: '8'
        },
        {
            label: 'Documentation/rules/handbook',
            value: '9'
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
    academicAdministrationActivities() {
        return this.academicAdministrationActivitiesGql
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
    academicAdministrationActivitiesByUser(userId: string) {
        return this.academicAdministrationActivitiesByUserGql
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
    addAcademicAdministrationActivity(
        activity: AcademicAdministrationActivityInput
    ) {
        return this.addacademicAdministrationActivityGql
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
    editAcademicAdministrationActivity(
        activity: AcademicAdministrationActivityInput
    ) {
        return this.editacademicAdministrationActivityGql
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
    deleteAcademicAdministrationActivity(
        activity: AcademicAdministrationActivityInput
    ) {
        return this.deleteacademicAdministrationActivityGql
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
