import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../../../../shared/services';

@Component({
    selector: "app-venue-add",
    templateUrl: "./venue-add.component.html",
    styleUrls: ["./venue-add.component.scss"]
})
export class VenueAddComponent implements OnInit {

    venueAddForm: FormGroup;

    // Configs
    addButtonStatus: boolean = false;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // Build form
        this.venueAddForm = this.fb.group({
            venueId: ["", Validators.required],
            capacity: [1, Validators.required],
            campus: ["", Validators.required]
        });
    }

    formData() {
        
    }

    onAdd() {
        if (this.venueAddForm.invalid) {
            this.alertService.sendMessage("Form is invalid", "danger");
            console.log(this.formData);
            return;
        }


    }

    onBack() {
        this.router.navigate(["../venue"]);
    }

    onReset() {
        this.venueAddForm.reset();
    }
}
