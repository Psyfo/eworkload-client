import { ErrorService } from './error.service';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddVenueGQL,
    DeleteVenueGQL,
    EditVenueGQL,
    VenueGQL,
    VenueInput,
    VenuesGQL
} from '../generated/output';
import { SelectItem } from 'primeng/components/common/selectitem';
import { of } from 'zen-observable';

@Injectable({
    providedIn: 'root'
})
export class VenueService {
    public types: SelectItem[] = [
        { label: 'Select Venue Type', value: '' },
        { label: 'Class', value: 'Class' },
        { label: 'Laboratory', value: 'Laboratory' }
    ];
    public headers = ['Venue Id', 'Campus', 'Capacity', 'Type'];
    public campuses: SelectItem[] = [
        { label: 'Select Campus', value: '' },
        { label: 'ML Sultan', value: 'ML Sultan' },
        { label: 'Ritson', value: 'Ritson' },
        { label: 'Steve Biko', value: 'Steve Biko' }
    ];

    public loading: boolean;
    public errors: any;
    public networkStatus: any;

    constructor(
        private errorService: ErrorService,
        private venueGql: VenueGQL,
        private venuesGql: VenuesGQL,
        private addVenueGql: AddVenueGQL,
        private editVenueGql: EditVenueGQL,
        private deleteVenueGql: DeleteVenueGQL
    ) {}

    getVenues() {
        return this.venuesGql
            .watch(
                {},
                {
                    pollInterval: 1000
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
                    pollInterval: 1000
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
