import { Position } from './../../../../../../sdk/models/Position';
import { AlertService } from './../../../../shared/services/alert.service';
import { PositionApi } from './../../../../../../sdk/services/custom/Position';
import { DepartmentApi } from './../../../../../../sdk/services/custom/Department';
import { QualificationApi } from './../../../../../../sdk/services/custom/Qualification';
import { LecturerApi } from './../../../../../../sdk/services/custom/Lecturer';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from './../../../../../../sdk/models/Department';
import { Lecturer } from './../../../../../../sdk/models/Lecturer';
import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../../../router.animations";
import { Qualification } from '../../../../../../sdk';

@Component({
    selector: "app-lecturer-manage-view",
    templateUrl: "./lecturer-manage-view.component.html",
    styleUrls: ["./lecturer-manage-view.component.scss"],
    animations: [routerTransition()]
})
export class LecturerManageViewComponent implements OnInit {
    lecturerId: string;
    lecturer: Lecturer;
    qualification: Qualification;
    department: Department;
    position: Position;
    qualifications: Qualification[];
    departments: Department[];
    positions: Position[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi,
        private qualificationApi: QualificationApi,
        private departmentApi: DepartmentApi,
        private positionApi: PositionApi,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        // Get ID from route
        this.lecturerId = this.activatedRoute.snapshot.paramMap.get("id");

        // Get lecturer info
        this.lecturerApi.findById(this.lecturerId).subscribe(
            (lecturerData) => {
                this.lecturer = lecturerData as Lecturer;
                this.getCurrentQualification(this.lecturer.qualificationId);
                this.getCurrentDepartment(this.lecturer.departmentId);
                this.getCurrentPosition(this.lecturer.positionId);
            },
            error => {
                console.log(
                    `Status: ${error.status} \n Message: ${error.message}`
                );
                this.alertService.sendMessage(error.message, "danger");
            }

        );
    }

    // Methods

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
                this.qualifications = qualifications;
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
                this.departments = departments;
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
                this.positions = positions;
            },
            error => {
                console.log(
                    `Status: ${error.status} \n Message: ${error.message}`
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    public onEdit() {
        this.router.navigate(['lecturer-manage/edit', this.lecturerId]);
    }

    public onBack(): void {
        this.router.navigate(['../lecturer-manage']);
    }

    public onDelete(): void {
        this.alertService.sendMessage('Delete service coming soon', 'info');
    }
}
