import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import {
    Department,
    DepartmentApi,
    FacultyApi,
    Faculty
} from "../../../../../../sdk";
import { AlertService } from "../../../../shared/services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-department-edit",
    templateUrl: "./department-edit.component.html",
    styleUrls: ["./department-edit.component.scss"]
})
export class DepartmentEditComponent implements OnInit {
    departmentId: string;
    department: Department;
    departments: Department[];
    faculty: Faculty;
    faculties: Faculty[];

    departmentEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private departmentApi: DepartmentApi,
        private facultyApi: FacultyApi,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // Get id from route;
        this.departmentId = this.activatedRoute.snapshot.paramMap.get("id");

        // Build form
        this.departmentEditForm = this.fb.group({
            departmentId: ["", Validators.required],
            name: ["", Validators.required],
            facultyId: [""]
        });

        this.initializeForm();
    }

    // Methods

    public initializeForm() {
        // Get department
        this.departmentApi.findById(this.departmentId).subscribe(
            departmentData => {
                this.getDepartments();
                this.getFaculties();
                this.department = departmentData as Department;
                // Get faculty (for names in dropdown)
                this.facultyApi.findById(this.department.facultyId).subscribe(
                    facultyData => {
                        this.faculty = facultyData as Faculty;
                        // Fetch dropdown data


                        // Patch form
                        this.departmentEditForm.patchValue(this.department);
                    }
                );
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



    public getDepartments() {
        this.departmentApi.find().subscribe(
            departmentData => {
                this.departments = departmentData as Department[];
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

    public getFaculties() {
        this.facultyApi.find().subscribe(
            facultyData => {
                this.faculties = facultyData as Faculty[];
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

    public onBack() {
        this.router.navigate(['../department']);
    }

    public onEdit() {
        this.departmentApi.patchAttributes(this.departmentEditForm.value as Department).subscribe(
            response => {
                console.log('Department updated!');
                this.alertService.sendMessage('Department updated!', 'success');
                error => {
                    console.log(`Status Code ${error.status}`);
                    console.log(`Message: ${error.message}`);
                    this.alertService.sendMessage(
                        `Status: ${error.status}`,
                        "danger"
                    );
                    this.alertService.sendMessage(error.message, "danger");
                }
            }
        )
    }
}
