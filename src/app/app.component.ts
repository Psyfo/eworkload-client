import { AlertService } from "./shared/services/alert.service";
import { timeout } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { Subscription } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    // Properties
    message: any = {};
    subscription: Subscription;

    constructor(
        private flashMessagesService: FlashMessagesService,
        private alertService: AlertService
    ) {
        // Flash messages
        this.subscription = this.alertService
            .getMessage()
            .subscribe(message => {
                let msgText = message.text;
                let msgParams: any;
                switch (message.params) {
                    case "success":
                        msgParams = {
                            cssClass: 'alert-success',
                            timeout: 5000
                        };
                    case "danger":
                        msgParams = {
                            cssClass: "alert-danger",
                            timeout: 5000
                        };
                    case "warning":
                        msgParams = {
                            cssClass: "alert-warning",
                            timeout: 5000
                        };
                    case "info":
                        msgParams = {
                            cssClass: "alert-info",
                            timeout: 5000
                        };
                }

                this.flashMessagesService.show(msgText, msgParams);
            });
    }

    ngOnInit() {

    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
