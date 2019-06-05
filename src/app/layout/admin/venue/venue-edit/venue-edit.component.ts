import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { VenueService } from '../../../../shared/services/venue.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Venue } from '../../../../shared/models';

@Component({
    selector: 'app-venue-edit',
    templateUrl: './venue-edit.component.html',
    styleUrls: ['./venue-edit.component.scss'],
    animations: [routerTransition()]
})
export class VenueEditComponent implements OnInit {
    venueId: string;
    venue: Venue = new Venue();

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
        this.venueId = this.activatedRoute.snapshot.paramMap.get('id');

        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.venueEditForm = this.fb.group({
            venueId: ['', Validators.required],
            capacity: [0, Validators.required],
            campus: ['', Validators.required]
        });

        this.getVenue(this.venueId);
    }

    getVenue(venueId: string) {
        this.venueService
            .getVenue(venueId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venue = <Venue>(<unknown>result.data.venue);

                this.venueEditForm.patchValue({
                    venueId: this.venue.venueId,
                    campus: this.venue.campus,
                    capacity: this.venue.capacity
                });
            });
    }

    getFormData() {}

    onEdit() {
        if (this.venueEditForm.invalid) {
            this.alertService.sendMessage('Form is invalid', 'danger');
            return;
        }
    }

    onCancel() {
        this.router.navigate(['admin/venue/view', this.venueId]);
    }
}
