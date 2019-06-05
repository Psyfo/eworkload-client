import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-venue-delete',
    templateUrl: './venue-delete.component.html',
    styleUrls: ['./venue-delete.component.scss'],
    animations: [routerTransition()]
})
export class VenueDeleteComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
