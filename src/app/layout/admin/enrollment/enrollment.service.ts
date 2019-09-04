import { map } from 'rxjs/operators';
import {
    AddEnrollmentGQL,
    DeleteEnrollmentGQL,
    EditEnrollmentGQL,
    EnrollmentGQL,
    EnrollmentInput,
    EnrollmentsByQualificationGQL,
    EnrollmentsByYearGQL,
    EnrollmentsGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private enrollmentGql: EnrollmentGQL,
        private enrollmentsGql: EnrollmentsGQL,
        private enrollmentsByYearGql: EnrollmentsByYearGQL,
        private enrollmentsByQualificationGql: EnrollmentsByQualificationGQL,
        private addEnrollmentGql: AddEnrollmentGQL,
        private editEnrollmentGql: EditEnrollmentGQL,
        private deleteEnrollmentGql: DeleteEnrollmentGQL
    ) {}

    enrollment(enrollmentYear: string, qualificationId: string) {
        return this.enrollmentGql
            .watch(
                {
                    enrollmentYear: enrollmentYear,
                    qualificationId: qualificationId
                },
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

    enrollments() {
        return this.enrollmentsGql
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

    enrollmentsByYear(enrollmentYear: string) {
        return this.enrollmentsByYearGql
            .watch(
                { enrollmentYear: enrollmentYear },
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

    enrollmentsByQualification(qualificationId: string) {
        return this.enrollmentsByQualificationGql
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
