import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { VenueInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { VenueService } from '../venue.service';

@Component({
    selector: 'app-venue-edit',
    templateUrl: './venue-edit.component.html',
    styleUrls: ['./venue-edit.component.scss'],
    animations: [routerTransition()]
})
export class VenueEditComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f') form: any;

    venueInput: VenueInput = {};
    types = this.venueService.types;
    campuses = this.venueService.campuses;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private venueService: VenueService
    ) {}

    ngOnInit() {
        this.getVenue();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getVenue() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const venueId = result.get('venueId');
                    this.venueService
                        .getVenue(venueId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(result => {
                            const venue = result.data.venue;
                            this.venueInput = {
                                venueId: venue.venueId,
                                campus: venue.campus,
                                capacity: venue.capacity,
                                type: venue.type
                            };
                            this.breadcrumbs = [
                                { label: 'admin' },
                                { label: 'venue', url: 'admin/venue' },
                                { label: 'view' },
                                { label: this.venueInput.venueId }
                            ];
                        });
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }

    onSubmit() {
        this.venueService
            .editVenue(this.venueInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.alertService.successToast('Venue edited');
                    this.router.navigate(
                        ['admin/venue/view', this.venueInput.venueId],
                        {
                            queryParams: {
                                venueId: this.venueInput.venueId
                            }
                        }
                    );
                },
                err => {
                    this.alertService.errorToast(err), console.warn(err);
                }
            );
    }

    onBack(event) {
        this.router.navigate(['admin/venue']);
    }

    onReset(event) {
        this.form.reset();
        this.alertService.clear();
        this.ngOnInit();
    }
}
