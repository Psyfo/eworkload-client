import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { OfferingTypeGQL, OfferingTypesGQL } from '../generated/output';
import { OfferingType } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class OfferingTypeService {
    offeringType: OfferingType;
    offeringTypes: OfferingType[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private offeringTypeGql: OfferingTypeGQL,
        private offeringTypesGql: OfferingTypesGQL
    ) {}

    getOfferingType(offeringTypeId: string) {
        return this.offeringTypeGql
            .watch({ offeringTypeId: offeringTypeId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    if (result.errors != undefined) {
                        this.errorService.toConsole(result.errors);

                        return;
                    }
                    return result;
                })
            );
    }

    getOfferingTypes() {
        return this.offeringTypesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }
}
