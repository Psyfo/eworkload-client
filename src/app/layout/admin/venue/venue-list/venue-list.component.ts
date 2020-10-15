import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Venue } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VenueService } from '../venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss'],
  animations: [routerTransition()]
})
export class VenueListComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  venues: Venue[];
  cols: any[];
  types = this.venueService.types;
  campuses = this.venueService.campuses;

  capacityFilter: number;
  capacityTimeout: any;
  selectedVenue: Venue;
  loading: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private venueService: VenueService
  ) {}

  // Lifecycle hooks
  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      { label: 'venue', url: '/admin/venue' }
    ];
    this.menuItems = [
      {
        label: 'View',
        icon: 'pi pi-search',
        command: (event) => this.onContextView(event)
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: (event) => this.onContextEdit(event)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event) => this.onContextDelete(event)
      }
    ];
    this.loading = true;
    this.getVenues();
    this.cols = [
      { field: 'venueId', header: 'Venue ID' },
      { field: 'capacity', header: 'Capacity' },
      { field: 'campus', header: 'Campus' },
      { field: 'type', header: 'Type' }
    ];
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods

  getVenues() {
    this.venueService
      .getVenues()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result) => {
        this.venues = result.data.venues;
        this.loading = result.loading;
      });
  }

  onAdd() {
    this.router.navigate(['admin/venue/add']);
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Venue: ${this.selectedVenue.venueId} selected`
    );

    this.router.navigate(['admin/venue/view', this.selectedVenue.venueId], {
      queryParams: {
        venueId: this.selectedVenue.venueId
      }
    });
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Venue: ${this.selectedVenue.venueId} selected`
    );

    this.router.navigate(['admin/venue/edit', this.selectedVenue.venueId], {
      queryParams: {
        venueId: this.selectedVenue.venueId
      }
    });
  }
  onContextDelete(event) {
    this.alertService.infoToast('Delete service coming soon');
  }

  onCapacityChange(event, venueTable) {
    if (this.capacityTimeout) {
      clearTimeout(this.capacityTimeout);
    }

    this.capacityTimeout = setTimeout(() => {
      venueTable.filter(event.value, 'capacity', 'gt');
    }, 250);
  }

  onRowSelect(event) {
    const venueData: Venue = event.data;

    this.alertService.infoToast(
      `Venue: ${this.selectedVenue.venueId} selected`
    );
    this.router.navigate(['admin/venue/view', this.selectedVenue.venueId], {
      queryParams: {
        venueId: this.selectedVenue.venueId
      }
    });
  }
}
