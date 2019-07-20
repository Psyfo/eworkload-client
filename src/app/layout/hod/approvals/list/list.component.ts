import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
