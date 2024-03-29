import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from '../shared/modules';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {}
}
