import { FormBuilder, Validators } from "@angular/forms";
import { FacultyApi } from "./../../../../../../sdk/services/custom/Faculty";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "./../../../../shared/services/alert.service";
import { Faculty } from "./../../../../../../sdk/models/Faculty";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-faculty-add",
    templateUrl: "./faculty-add.component.html",
    styleUrls: ["./faculty-add.component.scss"]
})
export class FacultyAddComponent implements OnInit {
    // Properties
    faculty: Faculty;

    facultyAddForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private facultyApi: FacultyApi,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // Initialize form
        this.facultyAddForm = this.fb.group({
            facultyId: ["", Validators.required],
            name: ["", Validators.required]
        });
    }

    onAdd() {
        // Check if ID exist first
        this.faculty = this.facultyAddForm.value as Faculty;

        this.facultyApi.exists<any>(this.faculty.facultyId).subscribe(response => {
            if (response.exists) {
                this.alertService.sendMessage(
                    "The Faculty ID already exists",
                    "warning"
                );
                return;
            } else {
                this.facultyApi
                    .patchOrCreate(this.faculty)
                    .subscribe(
                        newFaculty => {
                            console.log(newFaculty as Faculty);
                            this.alertService.sendMessage(
                                "Faculty Added!",
                                "success"
                            );
                            this.router.navigate(["../faculty"]);
                        },
                        error => {
                            console.log(
                                `Status: ${error.status} \n Message: ${
                                    error.message
                                }`
                            );
                            this.alertService.sendMessage(
                                error.message,
                                "danger"
                            );
                        }
                    );
            }
        });
    }

    onBack() {
        this.router.navigate(["../faculty"]);
    }

    onReset() {
        this.facultyAddForm.reset();
    }
}
