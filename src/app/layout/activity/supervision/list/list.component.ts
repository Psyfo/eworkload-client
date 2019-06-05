import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../../shared/models';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    supervisionActivities: Activity[];

    constructor() {}

    ngOnInit() {}
}
