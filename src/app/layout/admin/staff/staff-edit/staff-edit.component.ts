import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from './../../../../shared/services/alert.service';

@Component({
    selector: "app-staff-edit",
    templateUrl: "./staff-edit.component.html",
    styleUrls: ["./staff-edit.component.scss"]
})
export class StaffEditComponent implements OnInit {
    staffId: string;
    lectureName: string;
    staffEditForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // Get ID from route
        this.staffId = this.activatedRoute.snapshot.paramMap.get("id");

        // Build form
        this.staffEditForm = this.fb.group({
            staffId: [{ value: "", disabled: true }, Validators.required],
            name: this.fb.group({
                firstName: ["", Validators.required],
                lastName: ["", Validators.required]
            }),
            email: ["", Validators.required],
            qualificationId: [""],
            departmentId: [""],
            positionId: [""]
        });

        this.initializeForm();
    }

    // Methods

    public initializeForm(): any {

    }

    public getCurrentDepartment(dId: string) {

    }

    public getCurrentPosition(pId: string) {

    }

    public getDepartments(): void {

    }

    public getPositions(): void {

    }

    public onEdit(): void {
        
    }

    onBack() {
        this.router.navigate(["../staff"]);
    }
}
