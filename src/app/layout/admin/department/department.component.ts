import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
