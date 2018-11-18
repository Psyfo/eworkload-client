import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss'],
    animations: [routerTransition()]
})
export class ActivityListComponent implements OnInit {
    activities = [
        {
            activity_id: this.generateId(),
            activity_type: 'Lecturing',
            est_hours: 60,
            actual_hours: 58,
            date_recorded: new Date(),
            approved: true
        },
        {
            activity_id: this.generateId(),
            activity_type: 'CommInstruction',
            est_hours: 60,
            actual_hours: 63,
            date_recorded: new Date(),
            approved: false
        },
        {
            activity_id: this.generateId(),
            activity_type: 'Research',
            est_hours: 55,
            actual_hours: 58,
            date_recorded: new Date(),
            approved: true
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}
