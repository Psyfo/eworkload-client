import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from '../../../../shared/services';

@Component({
    selector: "app-department-add",
    templateUrl: "./department-add.component.html",
    styleUrls: ["./department-add.component.scss"]
})
export class DepartmentAddComponent implements OnInit {

    departmentAddForm: FormGroup;

    // Configs
    addButtonDisabled: boolean = false;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit() {

        //Build form
        this.departmentAddForm = this.fb.group({
            departmentId: ['', Validators.required],
            name: ['', Validators.required],
            facultyId: ['default']
        });

        // Fetch dropdown data;
        this.getFaculties();

    }



    onAdd() {
        if(!this.departmentAddForm.valid) {
            this.alertService.sendMessage('Form not valid', 'danger');
            return;
        }

    }

    onBack() {
        this.router.navigate(['../department']);
    }

    onReset() {
        this.departmentAddForm.reset();
    }

    public getFaculties() {
        
    }
}
