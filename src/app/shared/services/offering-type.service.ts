import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
    OfferingTypeGQL,
    OfferingTypesGQL,
    AddOfferingTypeGQL,
    EditOfferingTypeGQL,
    DeleteOfferingTypeGQL,
    OfferingTypeInput
} from '../generated/output';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class OfferingTypeService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private offeringTypeGql: OfferingTypeGQL,
        private offeringTypesGql: OfferingTypesGQL,
        private addOfferingTypeGql: AddOfferingTypeGQL,
        private editOfferingTypeGql: EditOfferingTypeGQL,
        private deleteOfferingTypeGql: DeleteOfferingTypeGQL
    ) {}

    getOfferingType(offeringTypeId: string) {
        return this.offeringTypeGql
            .watch(
                { offeringTypeId: offeringTypeId },
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

    getOfferingTypes() {
        return this.offeringTypesGql
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

    addOfferingType(offeringType: OfferingTypeInput) {
        return this.addOfferingTypeGql
            .mutate({ offeringType: offeringType })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    editOfferingType(offeringType: OfferingTypeInput) {
        return this.editOfferingTypeGql
            .mutate({ offeringType: offeringType })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    deleteOfferingType(offeringType: OfferingTypeInput) {
        return this.deleteOfferingTypeGql
            .mutate({ offeringType: offeringType })
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
