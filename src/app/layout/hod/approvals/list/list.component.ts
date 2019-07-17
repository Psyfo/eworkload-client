import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivityService } from '../../../../shared/services';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    private unsubscribe = new Subject();

    constructor() {}

    ngOnInit() {}
}
