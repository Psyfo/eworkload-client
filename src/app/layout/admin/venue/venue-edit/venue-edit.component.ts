import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../../../shared/services";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-venue-edit",
    templateUrl: "./venue-edit.component.html",
    styleUrls: ["./venue-edit.component.scss"]
})
export class VenueEditComponent implements OnInit {
    venueId: string;

    venueEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.venueId = this.activatedRoute.snapshot.paramMap.get("id");

        this.venueEditForm = this.fb.group({
            venueId: ["", Validators.required],
            capacity: [0, Validators.required],
            campus: ["", Validators.required]
        });

        this.initializeForm(this.venueId);
    }

    initializeForm(vId: string) {

    }

    formData() {

    }

    onEdit() {
        if (this.venueEditForm.invalid) {
            this.alertService.sendMessage("Form is invalid", "danger");
            return;
        }

        
    }

    onBack() {
        this.router.navigate(["venue/view", this.venueId]);
    }
}
