import { map } from 'rxjs/operators';
import {
    DutyGQL,
    DutiesGQL,
    AddDutyGQL,
    EditDutyGQL,
    DeleteDutyGQL
} from './../generated/output';
import { Injectable } from '@angular/core';
import { Duty, DutyInput } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DutyService {
    duty: Duty;
    duties: Duty[];

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

    getDuty(dutyId: string) {
        return this.dutyGql.watch({ dutyId: dutyId }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    getDuties() {
        return this.dutiesGql.watch().valueChanges.pipe(
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
