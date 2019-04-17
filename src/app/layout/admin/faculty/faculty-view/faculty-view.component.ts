import { AlertService } from "./../../../../shared/services/alert.service";
import { combineLatest } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { routerTransition } from "../../../../router.animations";
import { Faculty } from "../../../../shared/models";

@Component({
    selector: "app-faculty-view",
    templateUrl: "./faculty-view.component.html",
    styleUrls: ["./faculty-view.component.scss"],
    animations: [routerTransition()]
})
export class FacultyViewComponent implements OnInit {
    //Properties
    facultyId: string;
    faculty: Faculty;


    constructor(
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {

        // Get ID from route
        this.facultyId = this.activatedRoute.snapshot.paramMap.get("id");


    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }

    onEdit() {
        this.router.navigate(["admin/faculty/edit", this.facultyId]);
    }

    onDelete() {}

    onBack() {
        this.router.navigate(["../admin/faculty"]);
    }
}
