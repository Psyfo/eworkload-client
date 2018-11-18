import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User } from '../../shared/models';
import { FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    animations: [routerTransition()]
})
export class ActivityComponent implements OnInit {
    user: User = JSON.parse(localStorage.getItem('currentUser'));


    @Input()
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



    constructor(private flashMessagesService: FlashMessagesService) { }

    ngOnInit() {

    }

    @Input()
    private generateId() {
        return Math.round(Math.random() * 10000);
    }

}
