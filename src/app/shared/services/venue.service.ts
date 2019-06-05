import { Injectable } from '@angular/core';
import { Venue } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { VenueGQL, VenuesGQL } from '../generated/output';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class VenueService {
    venue: Venue;
    venues: Venue[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private venueGql: VenueGQL,
        private venuesGql: VenuesGQL
    ) {}

    getVenues() {
        return this.venuesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    getVenue(venueId: string) {
        return this.venueGql.watch({ venueId: venueId }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }
}
