import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Staff } from '../../shared/models/staff.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
    staff: Staff;

    constructor() { }

    ngOnInit() {
    }

}
