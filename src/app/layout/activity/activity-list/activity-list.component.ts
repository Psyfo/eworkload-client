import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss'],
    animations: [routerTransition()]
})
export class ActivityListComponent implements OnInit {


    constructor() { }

    ngOnInit() {
    }
}
