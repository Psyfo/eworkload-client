import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../../../shared/services";
import { Router } from "@angular/router";
import { DepartmentApi, FacultyApi, Department, Faculty } from "../../../../../../sdk";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-department-add",
    templateUrl: "./department-add.component.html",
    styleUrls: ["./department-add.component.scss"]
})
export class DepartmentAddComponent implements OnInit {
    // Properties
    departments: Department;
    faculties: Faculty[];

    departmentAddForm: FormGroup;

    // Configs
    addButtonDisabled: boolean = false;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private departmentApi: DepartmentApi,
        private facultyApi: FacultyApi,
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

    formData(): any {
        return this.departmentAddForm.value as Department;
    }

    onAdd() {
        if(!this.departmentAddForm.valid) {
            this.alertService.sendMessage('Form no valid', 'success');
            return;
        }

        this.departmentApi.exists(this.formData()).subscribe(
            data => {
                console.log(data);

                const result: any = data;
                if(result == true) {
                    this.alertService.sendMessage('The department code already exists', 'warning');
                } else {
                    this.departmentApi.patchOrCreate(this.formData()).subscribe(
                        response => {
                            console.log(response);
                            this.alertService.sendMessage('Department added!', 'success');
                            this.router.navigate(['../department']);
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
            }
        );

    }

    onBack() {
        this.router.navigate(['../department']);
    }

    onReset() {
        this.departmentAddForm.reset();
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
}
