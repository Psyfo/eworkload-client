import { Observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "./../../../../shared/services/alert.service";
import { Component, OnInit } from "@angular/core";
import { routerTransition } from '../../../../router.animations';
import { Faculty } from '../../../../shared/models';

@Component({
    selector: "app-faculty-edit",
    templateUrl: "./faculty-edit.component.html",
    styleUrls: ["./faculty-edit.component.scss"],
    animations: [routerTransition()]
})
export class FacultyEditComponent implements OnInit {
    // Properties
    facultyId: string;
    facultyEditForm: FormGroup;
    faculty: Faculty;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
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

    }

    onEdit(): void {

    }

    onBack(): void {
        this.router.navigate(['admin/faculty/view', this.facultyId]);
    }
}
