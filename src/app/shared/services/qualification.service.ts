import { Injectable } from '@angular/core';
import { Qualification } from '../models';
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

    constructor(
        private errorService: ErrorService,
        private alertService: AlertService,
        private qualificationGql: QualificationGQL,
        private qualificationsGql: QualificationsGQL
    ) {}

    getQualifications() {
        return this.qualificationsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
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
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }
}
