import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Alert, AlertType } from './alert.model';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(
        private router: Router,
        private messageService: MessageService
    ) {}

    // convenience methods
    success(detail: string, key?: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: detail,
            key: key
        });
    }
    error(detail: string, key?: string) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: detail,
            key: key
        });
    }
    info(detail: string, key?: string) {
        this.messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: detail,
            key: key
        });
    }
    warn(detail: string, key?: string) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Warning',
            detail: detail,
            key: key
        });
    }
    successToast(
        detail: string,
        key: string = 'toast',
        life = 5000,
        sticky: boolean = false
    ) {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: detail,
            key: key,
            life: life,
            sticky: sticky
        });
    }
    errorToast(
        detail: string,
        key: string = 'toast',
        life = 5000,
        sticky: boolean = false
    ) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: detail,
            key: key,
            life: life,
            sticky: sticky
        });
    }
    infoToast(
        detail: string,
        key: string = 'toast',
        life = 5000,
        sticky: boolean = false
    ) {
        this.messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: detail,
            key: key,
            life: life,
            sticky: sticky
        });
    }
    warnToast(
        detail: string,
        key: string = 'toast',
        life = 5000,
        sticky: boolean = false
    ) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Warning',
            detail: detail,
            key: key,
            life: life,
            sticky: sticky
        });
    }
    confirm(
        key: string,
        detail = 'Confirm to Proceed',
        summary = 'Are you sure?'
    ) {
        this.messageService.add({
            severity: 'warn',
            summary: summary,
            detail: detail,
            key: key,
            sticky: true
        });
    }

    // clear alerts
    clear(key?: string) {
        this.messageService.clear(key);
    }
}
