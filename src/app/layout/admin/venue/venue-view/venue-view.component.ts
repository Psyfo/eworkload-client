import { MenuItem } from 'primeng/components/common/menuitem';
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
    breadcrumbs: MenuItem[];
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

    getVenue(venueId: string) {
        this.venueService
            .getVenue(venueId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venue = result.data.venue;

                this.breadcrumbs = [
                    { label: 'admin' },
                    { label: 'venue', url: 'admin/venue' },
                    { label: 'view' },
                    { label: this.venue.venueId }
                ];
            });
    }

    onEdit(event) {
        this.router.navigate(['admin/venue/edit', this.venue.venueId], {
            queryParams: { venueId: this.venue.venueId }
        });
    }

    onBack(event) {
        this.router.navigate(['admin/venue']);
    }
    showConfirm() {
        this.alertService.clear();
        this.alertService.confirm('venueDelete');
    }
    onConfirm() {
        this.venueService
            .deleteVenue(this.venue)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                try {
                    this.alertService.infoToast('Venue deleted');
                    this.router.navigate(['admin/venue']);
                } catch (error) {
                    this.alertService.errorToast(error, 'errorToast');
                }
            });
    }
    onReject() {
        this.alertService.clear();
    }
}
