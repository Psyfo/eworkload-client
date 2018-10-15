import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { StaffService } from './staff.service';
import { Staff } from '../../shared/models/staff.model';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss'],
    animations: [routerTransition()]
})
export class StaffComponent implements OnInit {
    staffList: Staff[];

    constructor(private staffService: StaffService) {}

    ngOnInit() {
        this.staffList = this.staffService.getStaffList();
    }
}
