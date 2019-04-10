import { Component, OnInit, Renderer } from "@angular/core";
import { AlertService } from "../../../../shared/services";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
    selector: "app-department-view",
    templateUrl: "./department-view.component.html",
    styleUrls: ["./department-view.component.scss"]
})
export class DepartmentViewComponent implements OnInit {

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer
    ) {}

    ngOnInit() {
        // Get ID from route
        // this.departmentId = this.activatedRoute.snapshot.paramMap.get("id");

        // this.getDepartment(this.departmentId);
    }

    // Methods

    getDepartments() {}

    getFaculties() {}

    getDepartment(dId: string) {

    }

    getFaculty(fId: string) {

    }

    onEdit() {
        //this.router.navigate(["department/edit", this.departmentId]);
    }

    onBack() {
        this.router.navigate(["../department"]);
    }

    onDelete() {
        this.alertService.sendMessage('Delete function coming soon!', 'info');
    }
}
