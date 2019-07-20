import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { AlertService } from './shared/modules';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // Properties
    private unsubscribe = new Subject();

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        // Alert
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
