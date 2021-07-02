
import { Injectable } from '@angular/core';

import { SelectItem } from 'primeng/api/selectitem';


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
    
  ) {}

  getVenues() {
    
  }
  getVenue( ) {
   
  }
  addVenue( ) {
  
  }
  editVenue() {
   
  }
  deleteVenue() {
   
  }
}
