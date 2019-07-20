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
            summary: 'Success Message',
            detail: detail,
            key: key
        });
    }
    error(detail: string, key?: string) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: detail,
            key: key
        });
    }
    info(detail: string, key?: string) {
        this.messageService.add({
            severity: 'info',
            summary: 'Info Message',
            detail: detail,
            key: key
        });
    }
    warn(detail: string, key?: string) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Warning Message',
            detail: detail,
            key: key
        });
    }

    // clear alerts
    clear(key?: string) {
        this.messageService.clear(key);
    }
}
