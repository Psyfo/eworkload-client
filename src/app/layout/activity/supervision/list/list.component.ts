import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../../shared/models';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    supervisionActivities: Activity[];

    constructor() {}

    ngOnInit() {}
}
