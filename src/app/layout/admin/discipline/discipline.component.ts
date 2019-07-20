import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discipline',
    templateUrl: './discipline.component.html',
    styleUrls: ['./discipline.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
