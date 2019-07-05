import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { VenueService } from '../../../../shared/services/venue.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Venue, VenueInput } from '../../../../shared/models';

@Component({
    selector: 'app-venue-edit',
    templateUrl: './venue-edit.component.html',
    styleUrls: ['./venue-edit.component.scss'],
    animations: [routerTransition()],
})
export class VenueEditComponent implements OnInit {
    venue: VenueInput = new VenueInput();
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
            type: ['', [Validators.required]],
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
                    type: this.venue.type,
                });
            });
    }

    onEdit() {
        this.venue = this.formVal;
        this.venueService
            .editVenue(this.venue)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('Venue edited', 'success');
                this.router.navigate(['admin/venue/view', this.venueId.value], {
                    queryParams: {
                        venueId: this.venueId.value,
                    },
                });
            });
    }

    onCancel() {
        this.router.navigate(['admin/venue/view', this.venueId.value], {
            queryParams: {
                venueId: this.venueId.value,
            },
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
