import { Component, OnInit, Renderer } from "@angular/core";
import { AlertService } from "../../../../shared/services";
import { Router, ActivatedRoute } from "@angular/router";
import { Department } from "../../../../shared/models";
import { DepartmentGQL } from "../../../../shared/generated/output";
import { routerTransition } from "../../../../router.animations";


@Component({
    selector: "app-department-view",
    templateUrl: "./department-view.component.html",
    styleUrls: ["./department-view.component.scss"],
    animations: [routerTransition()]
})
export class DepartmentViewComponent implements OnInit {
    departmentId: string;
    department: Department
    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer,
        private departmentGql: DepartmentGQL
    ) {}

    ngOnInit() {
        // Get ID from route
        this.departmentId = this.activatedRoute.snapshot.paramMap.get("id");

        this.getDepartment(this.departmentId);
    }

    // Methods

    getDepartment(dId: string) {
        this.departmentGql.watch({departmentId: this.departmentId}).valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.department = result.data.department as Department;
            this.errors = result.errors;

            if (this.errors) {
                this.errors.forEach(error => {
                    console.log(`Error: ${error}`);
                    this.alertService.sendMessage(error.message, 'warn');
                });
            }
        })
    }


    onEdit() {
        this.router.navigate(["admin/department/edit", this.departmentId]);
    }

    onBack() {
        this.router.navigate(["../admin/department"]);
    }

    onDelete() {
        this.alertService.sendMessage('Delete function coming soon!', 'info');
    }
}
