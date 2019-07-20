import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';

import { ResearchActivity } from 'src/app/shared/generated';

import { AlertService } from 'src/app/shared/modules';

import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    researchActivities: ResearchActivity[];

    constructor(private alertService: AlertService, private router: Router) {}

    ngOnInit() {}
}
