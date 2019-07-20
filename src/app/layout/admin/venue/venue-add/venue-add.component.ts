import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { VenueInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { VenueService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
                this.alertService.success('Venue added');
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
