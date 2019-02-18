import { Faculty } from "./../../../../../../sdk/models/Faculty";
import { FacultyApi } from "./../../../../../../sdk/services/custom/Faculty";
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
    faculty: Faculty;

    constructor(
        private alertService: AlertService,
        private facultyApi: FacultyApi,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        // // Combine them both into a single observable
        // const urlParams = combineLatest(
        //     this.activatedRoute.params,
        //     this.activatedRoute.queryParams,
        //     (params, queryParams) => ({ ...params, ...queryParams })
        // );

        // // Subscribe to the single observable, giving us both
        // urlParams.subscribe(routeParams => {
        //     // routeParams containing both the query and route params
        //     this.facultyApi.findById<Faculty>(routeParams.id).subscribe(
        //         facultyObject => {
        //             facultyObject.facultyId === routeParams.id;
        //             this.faculty = facultyObject as Faculty;
        //             console.log(facultyObject);
        //         },
        //         error => {
        //             console.log(error);
        //             this.alertService.sendMessage(error.message, "danger");
        //         }
        //     );
        // });


        // Get ID from route
        this.facultyId = this.activatedRoute.snapshot.paramMap.get("id");

        this.facultyApi.findById(this.facultyId).subscribe(
            (facultyData) => {
                this.faculty = facultyData as Faculty;
            },
            (error) => {
                console.log(`Status: ${error.status} \n Message: ${error.message}`);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
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
