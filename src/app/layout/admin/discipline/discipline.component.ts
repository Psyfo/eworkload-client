import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

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
