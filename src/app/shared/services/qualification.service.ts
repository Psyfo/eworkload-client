import {
    AddQualificationGQL,
    EditQualificationGQL,
    DeleteQualificationGQL
} from './../generated/output';
import { Injectable } from '@angular/core';
import { Qualification, QualificationInput } from '../models';
import { ErrorService } from './error.service';
import { AlertService } from './alert.service';
import { QualificationGQL, QualificationsGQL } from '../generated/output';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QualificationService {
    qualification: Qualification;
    qualifications: Qualification[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    public types = ['Diploma', 'Bachelor', 'Masters', 'Doctorate'];

    constructor(
        private alertService: AlertService,
        private qualificationGql: QualificationGQL,
        private qualificationsGql: QualificationsGQL,
        private addQualificationGql: AddQualificationGQL,
        private editQualificationGql: EditQualificationGQL,
        private deleteQualificationGql: DeleteQualificationGQL
    ) {}

    getQualifications() {
        return this.qualificationsGql.watch().valueChanges.pipe(
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
            .watch({ qualificationId: qualificationId })
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
