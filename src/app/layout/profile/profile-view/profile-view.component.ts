import { timeout } from 'rxjs/operators';
import { AlertService } from "./../../../shared/services/alert.service";
import { Component, OnInit, SimpleChanges } from "@angular/core";
import { routerTransition } from "../../../router.animations";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import {
    Lecturer,
    LecturerApi,
    LoopBackAuth,
    QualificationInterface,
    QualificationApi,
    PositionApi,
    DepartmentApi,
    Qualification,
    Department,
    Position
} from "../../../../../sdk";

@Component({
    selector: "app-profile-view",
    templateUrl: "./profile-view.component.html",
    styleUrls: ["./profile-view.component.scss"],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    lecturer: Lecturer = new Lecturer();
    qualification: Qualification = new Qualification();
    department: Department = new Department();
    position: Position = new Position();

    // Pie
    public pieChartLabels: string[] = ["Research", "Lecturing", "Admin"];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = "pie";

    constructor(
        private flashMessagesService: FlashMessagesService,
        private alertService: AlertService,
        private router: Router,
        private lecturerApi: LecturerApi,
        private qualificationApi: QualificationApi,
        private departmentApi: DepartmentApi,
        private positionApi: PositionApi
    ) {}

    ngOnInit() {
        this.getData();
    }
    ngOnChanges(changes: SimpleChanges) {
        this.getData();
    }

    onEdit(): void {
        this.router.navigate(["profile/edit"]);
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public getData() {
        this.lecturerApi.getCurrent().subscribe(
            lecturerData => {
                this.lecturer = lecturerData;
                this.getQualification(this.lecturer.qualificationId);
                this.getDepartment(this.lecturer.departmentId);
                this.getPosition(this.lecturer.positionId);
            },
            error => {
                this.flashMessagesService.show(error, {
                    cssClass: "alert-danger"
                });
                console.log(error);
            }
        );
    }

    public getQualification(qId: string) {
        this.qualificationApi
            .findById<Qualification>(qId)
            .subscribe(qualificationData => {
                this.qualification = qualificationData;
                console.log(this.qualification);
            });
    }

    public getDepartment(dId: string) {
        this.departmentApi
            .findById<Department>(dId)
            .subscribe(departmentData => {
                this.department = departmentData;
                console.log(this.department);
            });
    }

    public getPosition(pId: string) {
        this.positionApi.findById<Position>(pId).subscribe(positionData => {
            this.position = positionData;
            console.log(this.position);
        });
    }

    public clearMessage(): void {
        this.alertService.clearMessage();
    }
}
