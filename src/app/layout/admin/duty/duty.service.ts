import { map } from 'rxjs/operators';
import {
    AddDutyGQL,
    DeleteDutyGQL,
    DutiesGQL,
    DutyGQL,
    DutyInput,
    EditDutyGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DutyService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private dutyGql: DutyGQL,
        private dutiesGql: DutiesGQL,
        private addDutyGql: AddDutyGQL,
        private editDutyGql: EditDutyGQL,
        private deleteDutyGql: DeleteDutyGQL
    ) {}

    duty(dutyId: string) {
        return this.dutyGql
            .watch(
                { dutyId: dutyId },
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

    duties() {
        return this.dutiesGql
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

    addDuty(duty: DutyInput) {
        return this.addDutyGql.mutate({ duty: duty }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editDuty(duty: DutyInput) {
        return this.editDutyGql.mutate({ duty: duty }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteDuty(duty: DutyInput) {
        return this.deleteDutyGql.mutate({ duty: duty }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
