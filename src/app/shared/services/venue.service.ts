import {
    AddVenueGQL,
    EditVenueGQL,
    DeleteVenueGQL,
} from './../generated/output';
import { Injectable } from '@angular/core';
import { Venue, VenueInput } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { VenueGQL, VenuesGQL } from '../generated/output';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class VenueService {
    venue: Venue;
    venues: Venue[];

    types = ['Class', 'Laboratory'];
    headers = ['Venue Id', 'Campus', 'Capacity', 'Type'];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private venueGql: VenueGQL,
        private venuesGql: VenuesGQL,
        private addVenueGql: AddVenueGQL,
        private editVenueGql: EditVenueGQL,
        private deleteVenueGql: DeleteVenueGQL
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

    addVenue(venue: VenueInput) {
        return this.addVenueGql.mutate({ venue: venue }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                return result;
            })
        );
    }
    editVenue(venue: VenueInput) {
        return this.editVenueGql.mutate({ venue: venue }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                return result;
            })
        );
    }
}
