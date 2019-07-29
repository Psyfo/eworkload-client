import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { VenueInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { ErrorService, ValidationService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
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
    venue: VenueInput;
    types = this.venueService.types;
    campuses = this.venueService.campuses;

    venueAddForm: FormGroup;

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

        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.venueAddForm = this.fb.group({
            venueId: ['', [Validators.required]],
            capacity: ['', [Validators.required, Validators.min(10)]],
            campus: ['', [Validators.required]],
            type: ['', [Validators.required]]
        });
    }
    onAdd(event) {
        this.venue = this.formVal;
        this.venueService
            .addVenue(this.venue)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                try {
                    const venueId = result.data.addVenue.venueId;
                    this.alertService.successToast(
                        `New Venue ${venueId} added`
                    );
                    this.router.navigate(['admin/venue/view', venueId], {
                        queryParams: {
                            venueId: venueId
                        }
                    });
                } catch (error) {
                    console.log(error);

                    this.alertService.errorToast(error, 'errorToast', 0, true);
                }
            });
    }

    onBack(event) {
        this.router.navigate(['admin/venue']);
    }

    onReset(event) {
        this.venueAddForm.reset();
        this.alertService.clear();
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
