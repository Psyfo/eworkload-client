import { AlertService } from "./../../../../shared/services/alert.service";
import { PositionApi } from "./../../../../../../sdk/services/custom/Position";
import { DepartmentApi } from "./../../../../../../sdk/services/custom/Department";
import { QualificationApi } from "./../../../../../../sdk/services/custom/Qualification";
import { Position } from "./../../../../../../sdk/models/Position";
import { Qualification } from "./../../../../../../sdk/models/Qualification";
import { Department } from "./../../../../../../sdk/models/Department";
import { Component, OnInit } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Lecturer, LecturerApi } from "../../../../../../sdk";
import { routerTransition } from "../../../../router.animations";
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from "@angular/forms";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
    selector: "app-lecturer-manage-edit",
    templateUrl: "./lecturer-manage-edit.component.html",
    styleUrls: ["./lecturer-manage-edit.component.scss"]
})
export class LecturerManageEditComponent implements OnInit {
    lecturerId: string;
    lecturer: Lecturer;
    qualification: Qualification;
    department: Department;
    position: Position;
    qualifications: Qualification[];
    departments: Department[];
    positions: Position[];
    lectureName: string;
    lecturerEditForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi,
        private qualificationApi: QualificationApi,
        private departmentApi: DepartmentApi,
        private positionApi: PositionApi,
        private alertService: AlertService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // Get ID from route
        this.lecturerId = this.activatedRoute.snapshot.paramMap.get("id");

        // Build form
        this.lecturerEditForm = this.fb.group({
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
        // Get current user and all their stats
        this.lecturerApi.findById(this.lecturerId).subscribe(
            (lecturerData) => {
                this.lecturer = lecturerData as Lecturer;
                this.getQualifications();
                this.getDepartments();
                this.getPositions();
                this.getCurrentQualification(this.lecturer.qualificationId);
                this.getCurrentPosition(this.lecturer.positionId);
                this.getCurrentDepartment(this.lecturer.departmentId);

                this.lecturerEditForm.patchValue(this.lecturer);
            },
            (error) => {
                console.log(`Status: ${error.status} \n Message: ${error.message}`);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    public getCurrentQualification(qId: string) {
        this.qualificationApi.findById<Qualification>(qId).subscribe(
            qualificationData => {
                this.qualification = qualificationData;
            },
            error => {
                console.log(
                    `Status: ${error.status} \n Message: ${error.message}`
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    public getCurrentDepartment(dId: string) {
        this.departmentApi
            .findById<Department>(dId)
            .subscribe(departmentData => {
                this.department = departmentData;
            });
    }

    public getCurrentPosition(pId: string) {
        this.positionApi.findById<Position>(pId).subscribe(positionData => {
            this.position = positionData;
        });
    }

    public getQualifications(): void {
        this.qualificationApi.find<Qualification>().subscribe(
            qualifications => {
                this.qualifications = qualifications.sort() as Qualification[];
            },
            error => {
                console.log(
                    `Status: ${error.status} \n Message: ${error.message}`
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    public getDepartments(): void {
        this.departmentApi.find<Department>().subscribe(
            departments => {
                this.departments = departments.sort() as Department[];
            },
            error => {
                console.log(
                    `Status: ${error.status} \n Message: ${error.message}`
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    public getPositions(): void {
        this.positionApi.find<Position>().subscribe(
            positions => {
                this.positions = positions.sort() as Position[];
            },
            error => {
                console.log(
                    `Status: ${error.status} \n Message: ${error.message}`
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    public onEdit(): void {
        this.lecturerApi.patchAttributes(this.lecturerId, this.lecturerEditForm.value as Lecturer).subscribe(
            (response) => {
                console.log('lecturer updated!');
                console.log(response);
                this.alertService.sendMessage('lecturer updated!', 'success');
                this.router.navigate(['lecturer-manage/view', this.lecturerId]);
            },
            (error) => {
                console.log(`Status: ${error.status} \n Message: ${error.message}`);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    onBack() {
        this.router.navigate(["../lecturer-manage"]);
    }
}
