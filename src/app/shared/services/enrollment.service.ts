import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddEnrollmentGQL,
    DeleteEnrollmentGQL,
    EditEnrollmentGQL,
    EnrollmentGQL,
    EnrollmentsByQualificationGQL,
    EnrollmentsByYearGQL,
    EnrollmentsGQL
} from '../generated/output';
import { Enrollment, EnrollmentInput } from '../models/enrollment.model';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    enrollment: Enrollment;
    enrollments: Enrollment[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private enrollmentGql: EnrollmentGQL,
        private enrollmentsGql: EnrollmentsGQL,
        private enrollmentsByYearGql: EnrollmentsByYearGQL,
        private enrollmentsByQualificationGql: EnrollmentsByQualificationGQL,
        private addEnrollmentGql: AddEnrollmentGQL,
        private editEnrollmentGql: EditEnrollmentGQL,
        private deleteEnrollmentGql: DeleteEnrollmentGQL
    ) {}

    getEnrollment(enrollmentYear: string, qualificationId: string) {
        return this.enrollmentGql
            .watch({
                enrollmentYear: enrollmentYear,
                qualificationId: qualificationId
            })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    getEnrollmentStatic(enrollmentYear: string, qualificationId: string) {
        return this.enrollmentGql.fetch({
            enrollmentYear: enrollmentYear,
            qualificationId: qualificationId
        });
    }

    getEnrollments() {
        return this.enrollmentsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    getEnrollmentsByYear(enrollmentYear: string) {
        return this.enrollmentsByYearGql
            .watch({ enrollmentYear: enrollmentYear })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getEnrollmentsByQualification(qualificationId: string) {
        return this.enrollmentsByQualificationGql
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

    addEnrollment(enrollment: EnrollmentInput) {
        return this.addEnrollmentGql.mutate({ enrollment: enrollment }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editEnrollment(enrollment: EnrollmentInput) {
        return this.editEnrollmentGql.mutate({ enrollment: enrollment }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteEnrollment(enrollment: EnrollmentInput) {
        return this.deleteEnrollmentGql.mutate({ enrollment: enrollment }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
