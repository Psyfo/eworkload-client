import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-lecture-tasks',
    templateUrl: './lecture-tasks.component.html',
    styleUrls: ['./lecture-tasks.component.scss'],
    animations: [routerTransition()]
})
export class LectureTasksComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
