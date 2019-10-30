import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
    OfferingTypeGQL,
    OfferingTypesGQL,
    AddOfferingTypeGQL,
    EditOfferingTypeGQL,
    DeleteOfferingTypeGQL,
    OfferingTypeInput
} from 'src/app/shared/generated';

@Injectable({
    providedIn: 'root'
})
export class OfferingTypeService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
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
            .valueChanges.pipe(map(result => result, err => err));
    }

    getOfferingTypes() {
        return this.offeringTypesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    addOfferingType(offeringType: OfferingTypeInput) {
        return this.addOfferingTypeGql
            .mutate({ offeringType: offeringType })
            .pipe(map(result => result, err => err));
    }

    editOfferingType(offeringType: OfferingTypeInput) {
        return this.editOfferingTypeGql
            .mutate({ offeringType: offeringType })
            .pipe(map(result => result, err => err));
    }

    deleteOfferingType(offeringType: OfferingTypeInput) {
        return this.deleteOfferingTypeGql
            .mutate({ offeringType: offeringType })
            .pipe(map(result => result, err => err));
    }
}
