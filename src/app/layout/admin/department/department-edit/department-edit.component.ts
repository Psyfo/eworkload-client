import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { AlertService } from "../../../../shared/services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-department-edit",
    templateUrl: "./department-edit.component.html",
    styleUrls: ["./department-edit.component.scss"]
})
export class DepartmentEditComponent implements OnInit {
    departmentId: string;

    departmentEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
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

    }



    public getDepartments() {

    }

    public getFaculties() {

    }

    public onBack() {
        this.router.navigate(['../department']);
    }

    public onEdit() {
        
    }
}
