import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { SupervisionActivity } from 'src/app/shared/generated/output';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    supervisionActivities: SupervisionActivity[];

    constructor() {}

    ngOnInit() {}
}
