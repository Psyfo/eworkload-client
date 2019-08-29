import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
    animations: [routerTransition()]
})
export class ReportComponent implements OnInit {
    private unsubscribe = new Subject();
    constructor() {}

    async ngOnInit() {}
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
