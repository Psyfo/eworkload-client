import {
    AddVenueGQL,
    EditVenueGQL,
    DeleteVenueGQL
} from './../generated/output';
import { Injectable } from '@angular/core';
import { Venue, VenueInput } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { VenueGQL, VenuesGQL } from '../generated/output';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { timer, interval, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VenueService {
    venue: Venue;
    venues: Venue[];

    public types = ['Class', 'Laboratory'];
    public headers = ['Venue Id', 'Campus', 'Capacity', 'Type'];

    public loading: boolean;
    public errors: any;
    public networkStatus: any;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private venueGql: VenueGQL,
        private venuesGql: VenuesGQL,
        private addVenueGql: AddVenueGQL,
        private editVenueGql: EditVenueGQL,
        private deleteVenueGql: DeleteVenueGQL
    ) {}

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getVenues() {
        return this.venuesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getVenue(venueId: string) {
        return this.venueGql
            .watch(
                { venueId: venueId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    console.log('Venue:', result.data.venue);
                    return result;
                })
            );
    }

    addVenue(venue: VenueInput) {
        return this.addVenueGql
            .mutate({ venue: venue }, { errorPolicy: 'all' })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
    editVenue(venue: VenueInput) {
        return this.editVenueGql.mutate({ venue: venue }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
    deleteVenue(venue: VenueInput) {
        return this.deleteVenueGql.mutate({ venue: venue }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
