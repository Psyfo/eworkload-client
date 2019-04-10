import { AlertService } from './../../../shared/services/alert.service';
import { OnInit, Component, SimpleChanges } from "@angular/core";
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { routerTransition } from "../../../router.animations";
import { first } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { Subject } from "rxjs";

@Component({
    selector: "app-profile-edit",
    templateUrl: "./profile-edit.component.html",
    styleUrls: ["./profile-edit.component.scss"],
    animations: [routerTransition()]
})
export class ProfileEditComponent implements OnInit {


    profileEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder
    ) {

    }

    ngOnChanges() {}
    ngOnInit() {
        // Build form
        this.profileEditForm = this.fb.group({
            lecturerId: [{ value: "", disabled: true }, Validators.required],
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

    // Form controls property
    public f() {
        return this.profileEditForm.controls;
    }

    public getCurrentQualification(qId: string) {

    }

    public getCurrentDepartment(dId: string) {

    }

    public getCurrentPosition(pId: string) {

    }

    public getQualifications(): void {

    }

    public getDepartments(): void {

    }

    public getPositions(): void {

    }

    // Edit form
    public onEdit(): void {
        
    }

    // Back button
    public backToProfile(): void {
        this.router.navigate(["../profile"]);
    }

}
