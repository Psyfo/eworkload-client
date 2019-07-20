import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faculty',
    templateUrl: './faculty.component.html',
    styleUrls: ['./faculty.component.scss'],
    animations: [routerTransition()]
})
export class FacultyComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
