import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Venue } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { VenueService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-venue-view',
    templateUrl: './venue-view.component.html',
    styleUrls: ['./venue-view.component.scss'],
    animations: [routerTransition()]
})
export class VenueViewComponent implements OnInit {
    // Properties

    venueId: string;
    venue: Venue;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private venueService: VenueService
    ) {
        //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit() {
        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.getVenue(result.venueId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getVenue(vId: string) {
        this.venueService
            .getVenue(vId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venue = <Venue>(<unknown>result.data.venue);
                console.log('Time: ', new Date().getTime().toString());
                console.log('Venue: ', this.venue);
            });
    }

    onEdit() {
        this.router.navigate(['admin/venue/edit', this.venue.venueId], {
            queryParams: { venueId: this.venue.venueId }
        });
    }

    onCancel() {
        this.router.navigate(['../admin/venue']);
    }

    onDelete() {
        this.alertService.info('Delete function coming soon!');
    }
}
