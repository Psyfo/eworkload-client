import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { VenueInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { ErrorService, ValidationService } from 'src/app/shared/services';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { VenueService } from '../venue.service';

@Component({
  selector: 'app-venue-add',
  templateUrl: './venue-add.component.html',
  styleUrls: ['./venue-add.component.scss'],
  animations: [routerTransition()]
})
export class VenueAddComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f') form: any;
  types = this.venueService.types;
  campuses = this.venueService.campuses;

  venueInput: VenueInput = {};

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private errorService: ErrorService,
    private validationService: ValidationService,
    private router: Router,
    private fb: FormBuilder,
    private venueService: VenueService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'venue', url: 'admin/venue' },
      { label: 'add', url: 'admin/venue/add' }
    ];
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit() {
    this.venueService
      .addVenue(this.venueInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {},
        (err) => {
          this.alertService.errorToast(err);
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
