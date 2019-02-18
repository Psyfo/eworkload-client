import { Observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Faculty } from "./../../../../../../sdk/models/Faculty";
import { FacultyApi } from "./../../../../../../sdk/services/custom/Faculty";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "./../../../../shared/services/alert.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-faculty-edit",
    templateUrl: "./faculty-edit.component.html",
    styleUrls: ["./faculty-edit.component.scss"]
})
export class FacultyEditComponent implements OnInit {
    // Properties
    facultyId: string;
    faculty: Faculty;
    facultyEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private facultyApi: FacultyApi,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // Get ID from route
        this.facultyId = this.activatedRoute.snapshot.paramMap.get("id");

        // Initialize Form
        this.facultyEditForm = this.fb.group({
            facultyId: ["", Validators.required],
            name: ["", Validators.required]
        });

        this.initializeForm();
    }

    initializeForm(): void {
        this.facultyApi.findById(this.facultyId).subscribe(
            (facultyData) => {
                this.faculty = facultyData as Faculty;

                this.facultyEditForm.patchValue(this.faculty);
            },
            (error) => {
                console.log(`Status: ${error.status} \n Message: ${error.message}`);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    onEdit(): void {
        this.facultyApi.patchAttributes(this.facultyId, this.facultyEditForm.value as Faculty).subscribe(
            (response) => {
                console.log('Faculty updated!');
                this.alertService.sendMessage('Faculty updated!', 'success');
                this.router.navigate(['faculty/view', this.facultyId]);
            },
            (error) => {
                console.log(`Status: ${error.status} \n Message: ${error.message}`);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    onBack(): void {
        this.router.navigate(['faculty/view', this.facultyId]);
    }
}
