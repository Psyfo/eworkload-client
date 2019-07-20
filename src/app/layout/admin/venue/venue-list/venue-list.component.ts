import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Venue } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { VenueService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
    selector: 'app-venue-list',
    templateUrl: './venue-list.component.html',
    styleUrls: ['./venue-list.component.scss'],
    animations: [routerTransition()]
})
export class VenueListComponent implements OnInit {
    breadcrumbs: MenuItem[];
    venues: Venue[];
    cols: any[];

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private venueService: VenueService
    ) {}

    // Lifecycle hooks
    ngOnInit() {
        this.breadcrumbs = [
            {
                label: 'admin'
            },
            { label: 'venue', url: '/admin/venue' }
        ];
        this.getVenues();
        this.cols = [
            { field: 'venueId', header: 'Venue ID' },
            { field: 'capacity', header: 'Capacity' },
            { field: 'campus', header: 'Campus' },
            { field: 'type', header: 'Type' }
        ];
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods

    getVenues() {
        this.venueService
            .getVenues()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venues = result.data.venues;
            });
    }

    onAdd() {
        this.router.navigate(['admin/venue/add']);
    }
}
