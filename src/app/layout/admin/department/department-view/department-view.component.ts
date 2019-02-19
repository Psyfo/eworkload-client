import { Component, OnInit, Renderer } from "@angular/core";
import { AlertService } from "../../../../shared/services";
import { Router, ActivatedRoute } from "@angular/router";
import {
    DepartmentApi,
    FacultyApi,
    Department,
    Faculty
} from "../../../../../../sdk";

@Component({
    selector: "app-department-view",
    templateUrl: "./department-view.component.html",
    styleUrls: ["./department-view.component.scss"]
})
export class DepartmentViewComponent implements OnInit {
    // Properties
    departmentId: string;
    department: Department;
    departments: Department[];
    faculty: Faculty;
    faculties: Faculty[];

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer,
        private departmentApi: DepartmentApi,
        private facultyApi: FacultyApi
    ) {}

    ngOnInit() {
        // Get ID from route
        this.departmentId = this.activatedRoute.snapshot.paramMap.get("id");

        this.getDepartment(this.departmentId);
    }

    // Methods

    getDepartments() {}

    getFaculties() {}

    getDepartment(dId: string) {
        this.departmentApi.findById(dId).subscribe(
            departmentData => {
                this.department = departmentData as Department;
                this.getFaculty(this.department.facultyId);
            },
            error => {
                console.log(`Status Code ${error.status}`);
                console.log(`Message: ${error.message}`);
                this.alertService.sendMessage(
                    `Status: ${error.status}`,
                    "danger"
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    getFaculty(fId: string) {
        this.facultyApi.findById(fId).subscribe(
            facultyData => {
                this.faculty = facultyData as Faculty;
            },
            error => {
                console.log(`Status Code ${error.status}`);
                console.log(`Message: ${error.message}`);
                this.alertService.sendMessage(
                    `Status: ${error.status}`,
                    "danger"
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    onEdit() {
        this.router.navigate(["department/edit", this.departmentId]);
    }

    onBack() {
        this.router.navigate(["../department"]);
    }

    onDelete() {
        this.alertService.sendMessage('Delete function coming soon!', 'info');
    }
}
