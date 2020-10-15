import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { SelectItem } from 'primeng/api/selectitem';
import { ErrorService } from 'src/app/shared/services';
import {
  VenueGQL,
  VenuesGQL,
  AddVenueGQL,
  EditVenueGQL,
  DeleteVenueGQL,
  VenueInput
} from 'src/app/shared/generated';

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
        map(
          (result) => result,
          (err) => err
        )
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
        map(
          (result) => result,
          (err) => err
        )
      );
  }
  addVenue(venue: VenueInput) {
    return this.addVenueGql.mutate({ venue: venue }).pipe(
      map(
        (result) => result,
        (err) => err
      )
    );
  }
  editVenue(venue: VenueInput) {
    return this.editVenueGql.mutate({ venue: venue }).pipe(
      map(
        (result) => result,
        (err) => err
      )
    );
  }
  deleteVenue(venue: VenueInput) {
    return this.deleteVenueGql.mutate({ venue: venue }).pipe(
      map(
        (result) => result,
        (err) => err
      )
    );
  }
}
