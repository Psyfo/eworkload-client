import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-venue',
    templateUrl: './venue.component.html',
    styleUrls: ['./venue.component.scss'],
    animations: [routerTransition()]
})
export class VenueComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
