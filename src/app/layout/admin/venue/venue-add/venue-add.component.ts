import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../../../../shared/services';
import { Venue } from '../../../../shared/models';
import { VenueService } from '../../../../shared/services/venue.service';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-venue-add',
    templateUrl: './venue-add.component.html',
    styleUrls: ['./venue-add.component.scss'],
    animations: [routerTransition()]
})
export class VenueAddComponent implements OnInit {
    venue: Venue;

    venueAddForm: FormGroup;

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

    getFormData() {}

    onAdd() {
        if (this.venueAddForm.invalid) {
            this.alertService.sendMessage('Form is invalid', 'danger');
            return;
        }
    }

    onCancel() {
        this.router.navigate(['../admin/venue']);
    }

    onReset() {
        this.venueAddForm.reset();
    }
}
