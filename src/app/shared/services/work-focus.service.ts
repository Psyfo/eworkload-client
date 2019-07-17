import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { WorkFocusesGQL, WorkFocusGQL } from '../generated/output';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class WorkFocusService {
    loading: boolean;
    errors: any;

    constructor(
        private errorService: ErrorService,
        private workFocusGql: WorkFocusGQL,
        private workFocusesGql: WorkFocusesGQL
    ) {}

    getWorkFocuses() {
        return this.workFocusesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    getWorkFocus(name: string) {
        return this.workFocusGql
            .watch(
                { name: name },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }
}
