import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-enrollment',
    templateUrl: './enrollment.component.html',
    styleUrls: ['./enrollment.component.scss'],
    animations: [routerTransition()]
})
export class EnrollmentComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
