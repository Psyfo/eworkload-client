import { Component, OnInit, EventEmitter } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-activity-add',
    templateUrl: './activity-add.component.html',
    styleUrls: ['./activity-add.component.scss'],
    animations: [routerTransition()]
})
export class ActivityAddComponent implements OnInit {


    constructor() { }

    ngOnInit() {
    }

}
