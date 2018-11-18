import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Staff } from '../../shared/models/staff.model';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss'],
    animations: [routerTransition()]
})
export class StaffComponent implements OnInit {
    staff: Staff[];

    constructor() { }

    ngOnInit() {

    }
}
