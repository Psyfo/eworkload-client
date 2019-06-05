import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import {
    EnrollmentGQL,
    FacultiesGQL,
    EditEnrollmentGQL,
    AddEnrollmentGQL,
    EnrollmentsGQL,
    EnrollmentsByYearGQL,
    EnrollmentsByQualificationGQL
} from '../generated/output';
import { map } from 'rxjs/operators';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    enrollment: Enrollment;
    enrollments: Enrollment[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private enrollmentGql: EnrollmentGQL,
        private enrollmentsGql: EnrollmentsGQL,
        private enrollmentsByYearGql: EnrollmentsByYearGQL,
        private enrollmentsByQualificationGql: EnrollmentsByQualificationGQL,
        private editEnrollmentGql: EditEnrollmentGQL,
        private addEnrollmentGql: AddEnrollmentGQL
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
                    this.errorService.toConsole(result.errors);
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
                this.errorService.toConsole(result.errors);
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
                    this.errorService.toConsole(result.errors);
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
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    addEnrollment(enrollment) {
        return this.addEnrollmentGql.mutate(enrollment).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Enrollment added', 'success');
                return result;
            })
        );
    }

    editEnrollment(enrollment) {
        return this.editEnrollmentGql.mutate(enrollment).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Enrollment edited', 'success');
                return result;
            })
        );
    }
}
