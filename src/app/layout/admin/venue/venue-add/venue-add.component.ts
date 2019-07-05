import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../../../../shared/services';
import { Venue, VenueInput } from '../../../../shared/models';
import { VenueService } from '../../../../shared/services/venue.service';
import { routerTransition } from '../../../../router.animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-venue-add',
    templateUrl: './venue-add.component.html',
    styleUrls: ['./venue-add.component.scss'],
    animations: [routerTransition()]
})
export class VenueAddComponent implements OnInit {
    venue: VenueInput;
    types = this.venueService.types;

    venueAddForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private venueService: VenueService
    ) {}

    ngOnInit() {
        // Build form
        this.venueAddForm = this.fb.group({
            venueId: ['', Validators.required],
            capacity: [1, Validators.required],
            campus: ['', Validators.required]
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    onAdd() {
        this.venue = this.formVal;
        this.venueService
            .addVenue(this.venue)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('Venue added', 'success');
                setTimeout(() => {
                    this.router.navigate(
                        ['admin/venue/view', this.venueId.value],
                        {
                            queryParams: this.venueId.value
                        }
                    );
                }, 1000);
            });
    }

    onCancel() {
        this.router.navigate(['admin/venue']);
    }

    onReset() {
        this.venueAddForm.reset();
    }

    // Getters
    get venueId() {
        return this.venueAddForm.get('venueId');
    }
    get campus() {
        return this.venueAddForm.get('campus');
    }
    get capacity() {
        return this.venueAddForm.get('capacity');
    }
    get type() {
        return this.venueAddForm.get('type');
    }
    get formVal() {
        return this.venueAddForm.getRawValue();
    }
}
