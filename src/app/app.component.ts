import { AlertService } from './shared/services/alert.service';
import { timeout, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription, Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // Properties
    message: any = {};
    subscription: Subscription;
    private unsubscribe = new Subject();

    constructor(
        private flashMessagesService: FlashMessagesService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        // Flash messages
        this.alertService
            .getMessage()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(message => {
                let msgText = message.text;
                let msgParams: any;
                switch (message.params) {
                    case 'success':
                        msgParams = {
                            cssClass: 'alert alert-success',
                            timeout: 5000
                        };
                        break;
                    case 'danger':
                        msgParams = {
                            cssClass: 'alert alert-danger',
                            timeout: 5000
                        };
                        break;
                    case 'info':
                        msgParams = {
                            cssClass: 'alert alert-info',
                            timeout: 5000
                        };
                        break;
                    case 'primary':
                        msgParams = {
                            cssClass: 'alert alert-primary',
                            timeout: 5000
                        };
                        break;
                    case 'secondary':
                        msgParams = {
                            cssClass: 'alert alert-secondary',
                            timeout: 5000
                        };
                        break;
                    case 'dark':
                        msgParams = {
                            cssClass: 'alert alert-dark',
                            timeout: 5000
                        };
                        break;
                    case 'light':
                        msgParams = {
                            cssClass: 'alert alert-light',
                            timeout: 5000
                        };
                        break;
                    default:
                        msgParams = {
                            cssClass: 'alert alert-warning',
                            timeout: 10000
                        };
                        break;
                }

                this.flashMessagesService.show(msgText, msgParams);
            });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        // this.subscription.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
