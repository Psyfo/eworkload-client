import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    animations: [routerTransition()]
})
export class ActivityComponent implements OnInit {
    constructor(private flashMessagesService: FlashMessagesService) { }

    ngOnInit() {

    }

}
