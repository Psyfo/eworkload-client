import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../../../shared/services";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-venue-view",
    templateUrl: "./venue-view.component.html",
    styleUrls: ["./venue-view.component.scss"]
})
export class VenueViewComponent implements OnInit {
    // Properties

    venueId: string;


    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        // Get ID from route
        this.venueId = this.activatedRoute.snapshot.paramMap.get("id");

        this.getVenue(this.venueId);
    }

    getVenue(vId: string) {
        
    }

    onEdit() {
        this.router.navigate(["venue/edit", this.venueId]);
    }

    onBack() {
        this.router.navigate(["../venue"]);
    }

    onDelete() {
        this.alertService.sendMessage("Delete function coming soon!", "info");
    }
}
