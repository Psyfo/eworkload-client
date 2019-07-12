import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Venue } from '../../../../shared/models';
import { AlertService } from '../../../../shared/services';
import { VenueService } from '../../../../shared/services/venue.service';
import { routerTransition } from '../../../../router.animations';

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
        this.alertService.sendMessage('Delete function coming soon!', 'info');
    }
}
