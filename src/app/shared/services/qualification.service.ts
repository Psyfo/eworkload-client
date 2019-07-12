import {
    AddQualificationGQL,
    EditQualificationGQL,
    DeleteQualificationGQL,
    QualificationsNoEnrollmentGQL
} from './../generated/output';
import { Injectable } from '@angular/core';
import { Qualification, QualificationInput, Department } from '../models';
import { ErrorService } from './error.service';
import { AlertService } from './alert.service';
import { QualificationGQL, QualificationsGQL } from '../generated/output';
import { map, takeUntil } from 'rxjs/operators';
import { DepartmentService } from './department.service';
import { Subscription, Subject } from 'rxjs';

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

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private qualificationGql: QualificationGQL,
        private qualificationsGql: QualificationsGQL,
        private addQualificationGql: AddQualificationGQL,
        private editQualificationGql: EditQualificationGQL,
        private deleteQualificationGql: DeleteQualificationGQL,
        private qualificationsNoEnrollmentGql: QualificationsNoEnrollmentGQL,
        private departmentService: DepartmentService
    ) {}

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

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

    departmentList() {
        return this.departmentService
            .getDepartments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                return result.data.departments.map(
                    department => <Department>(<unknown>department)
                );
            });
    }
}
