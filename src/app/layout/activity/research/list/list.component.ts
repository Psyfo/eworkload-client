import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService } from '../../../../shared/services';
import { Router } from '@angular/router';
import { ResearchActivity } from '../../../../shared/models';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    researchActivities: ResearchActivity[];

    constructor(
        private alertService: AlertService,
        private router: Router,
    ) {}

    ngOnInit() {

    }
}
