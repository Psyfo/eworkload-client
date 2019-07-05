import { FormalInstructionWorkload } from './../models/workload.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { FormalInstructionWorkloadGQL } from './../generated/output';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root',
})
export class WorkloadService {
    formalInstructionWorkload: FormalInstructionWorkload;
    loading: boolean;
    errors: any;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private formalInstructionWorkloadGql: FormalInstructionWorkloadGQL
    ) {}

    getFormalInstructionWorkload(userId: string) {
        return this.formalInstructionWorkloadGql
            .watch({ userId: userId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    return result;
                })
            );
    }
}
