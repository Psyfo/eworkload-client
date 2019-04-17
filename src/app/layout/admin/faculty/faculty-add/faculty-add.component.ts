import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "./../../../../shared/services/alert.service";
import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../../../router.animations";

@Component({
    selector: "app-faculty-add",
    templateUrl: "./faculty-add.component.html",
    styleUrls: ["./faculty-add.component.scss"],
    animations: [routerTransition()]
})
export class FacultyAddComponent implements OnInit {

    facultyAddForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
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

    }

    onBack() {
        this.router.navigate(["../admin/faculty"]);
    }

    onReset() {
        this.facultyAddForm.reset();
    }
}
