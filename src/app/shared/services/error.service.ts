import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    constructor(private alertService: AlertService) {}

    toConsole(errors?: any) {
        if (errors != undefined) {
            errors.map(error => {
                console.log(JSON.stringify(error));
                this.alertService.sendMessage(JSON.stringify(error), 'danger');
            });
            return;
        }
    }
}
