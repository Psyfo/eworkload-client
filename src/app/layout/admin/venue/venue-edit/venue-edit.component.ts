import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { VenueInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { VenueService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-venue-edit',
    templateUrl: './venue-edit.component.html',
    styleUrls: ['./venue-edit.component.scss'],
    animations: [routerTransition()]
})
export class VenueEditComponent implements OnInit {
    venue: VenueInput;
    types = this.venueService.types;

    private unsubscribe = new Subject();

    venueEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private venueService: VenueService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log(result.venueId);
                this.buildForm(result.venueId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm(venueId: string) {
        this.venueEditForm = this.fb.group({
            venueId: ['', Validators.required],
            capacity: [0, Validators.required],
            campus: ['', Validators.required],
            type: ['', [Validators.required]]
        });

        this.getVenue(venueId);
    }

    getVenue(venueId: string) {
        this.venueService
            .getVenue(venueId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venue = <VenueInput>(<unknown>result.data.venue);
                console.log('Errors:', result.errors);
                this.venueEditForm.patchValue({
                    venueId: this.venue.venueId,
                    campus: this.venue.campus,
                    capacity: this.venue.capacity,
                    type: this.venue.type
                });
            });
    }

    async onEdit() {
        this.venue = this.formVal;
        console.log('Venue: ', this.venue);

        await this.venueService
            .editVenue(this.venue)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {});
        this.alertService.success('Venue edited');
        this.router.navigate(['admin/venue/view', this.venueId.value], {
            queryParams: {
                venueId: this.venueId.value
            }
        });
    }

    onCancel() {
        this.router.navigate(['admin/venue/view', this.venueId.value], {
            queryParams: {
                venueId: this.venueId.value
            }
        });
    }

    get venueId() {
        return this.venueEditForm.get('venueId');
    }
    get campus() {
        return this.venueEditForm.get('campus');
    }
    get capacity() {
        return this.venueEditForm.get('capacity');
    }
    get type() {
        return this.venueEditForm.get('type');
    }
    get formVal() {
        return this.venueEditForm.getRawValue();
    }
}
