import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import { routerTransition } from '../../../../router.animations';
import { AlertService } from '../../../../shared/services';

@Component({
    selector: "app-staff-add",
    templateUrl: "./staff-add.component.html",
    styleUrls: ["./staff-add.component.scss"],
    animations: [routerTransition()]
})
export class StaffAddComponent implements OnInit {
    nationalities: []


    staffAddForm: FormGroup;

    constructor(
        private router: Router,
        private alertService: AlertService
    ) {

    }

    ngOnInit() {
        // reactive form structure
        this.staffAddForm = new FormGroup({
            staffId: new FormControl(null, [Validators.required]),
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required]),
            nationality: new FormControl(null, [Validators.required]),
            positionId: new FormControl(null, [Validators.required]),
            departmentId: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ])
        });
    }

    onAdd() {

    }

    onBack() {
        this.router.navigate(["../admin/staff"]);
    }

    onReset() {
        this.staffAddForm.reset();
    }

    accountExists(control: FormControl) {

    }
}
