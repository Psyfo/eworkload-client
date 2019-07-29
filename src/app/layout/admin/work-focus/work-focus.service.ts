import { map } from 'rxjs/operators';
import { WorkFocusesGQL, WorkFocusGQL } from 'src/app/shared/generated';
import { ErrorService } from 'src/app/shared/services';

import { Injectable } from '@angular/core';

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
                    return result;
                })
            );
    }
}
