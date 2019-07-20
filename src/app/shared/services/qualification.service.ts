import { Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddQualificationGQL,
    DeleteQualificationGQL,
    EditQualificationGQL,
    QualificationGQL,
    QualificationsGQL,
    QualificationsNoEnrollmentGQL,
    QualificationInput
} from '../generated/output';
import { DepartmentService } from './department.service';

@Injectable({
    providedIn: 'root'
})
export class QualificationService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    public types = ['Diploma', 'Bachelor', 'Masters', 'Doctorate'];

    private unsubscribe = new Subject();

    constructor(
        private qualificationGql: QualificationGQL,
        private qualificationsGql: QualificationsGQL,
        private addQualificationGql: AddQualificationGQL,
        private editQualificationGql: EditQualificationGQL,
        private deleteQualificationGql: DeleteQualificationGQL,
        private qualificationsNoEnrollmentGql: QualificationsNoEnrollmentGQL
    ) {}

    getQualifications() {
        return this.qualificationsGql
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

    getQualification(qualificationId: string) {
        return this.qualificationGql
            .watch(
                { qualificationId: qualificationId },
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

    getQualificationsNoEnrollment() {
        return this.qualificationsNoEnrollmentGql
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

    addQualification(qualification: QualificationInput) {
        return this.addQualificationGql
            .mutate({ qualification: qualification })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    editQualification(qualification: QualificationInput) {
        return this.editQualificationGql
            .mutate({ qualification: qualification })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    deleteQualification(qualification: QualificationInput) {
        return this.deleteQualificationGql
            .mutate({ qualification: qualification })
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
