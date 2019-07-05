import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { WorkFocusesGQL, WorkFocusGQL } from '../generated/output';
import { WorkFocus } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class WorkFocusService {
    workFocus: WorkFocus;
    workFocuses: WorkFocus[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private workFocusGql: WorkFocusGQL,
        private workFocusesGql: WorkFocusesGQL
    ) {}

    getWorkFocuses() {
        return this.workFocusesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    getWorkFocus(name: string) {
        return this.workFocusGql.watch({ name: name }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }
}