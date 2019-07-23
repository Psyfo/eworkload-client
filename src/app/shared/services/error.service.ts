import { AlertService } from 'src/app/shared/modules';
import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
    constructor(private alertService: AlertService) {}

    handleGqlError(err: any) {
        if (err.graphQLErrors) {
            err.graphQLErrors.forEach(e => {
                console.log(e.message);
                this.alertService.errorToast(e.message);
            });
        }
        if (err.networkError) {
            console.log(err.message);
            this.alertService.errorToast(err.message);
        }
    }

    handleError(err: any) {
        console.log(err);
        this.alertService.errorToast(err.message);
    }
}
