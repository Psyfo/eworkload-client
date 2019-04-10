import { AlertService } from "./../../../../shared/services/alert.service";
import { combineLatest } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: "app-faculty-view",
    templateUrl: "./faculty-view.component.html",
    styleUrls: ["./faculty-view.component.scss"]
})
export class FacultyViewComponent implements OnInit {
    //Properties
    facultyId: string;


    constructor(
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {

        // Get ID from route
        // this.facultyId = this.activatedRoute.snapshot.paramMap.get("id");


    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }

    onEdit() {
        this.router.navigate(["faculty/edit", this.facultyId]);
    }

    onDelete() {}

    onBack() {
        this.router.navigate(["../faculty"]);
    }
}
