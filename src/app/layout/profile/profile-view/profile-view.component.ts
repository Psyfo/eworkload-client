import { TotalWorkload } from "./../../../shared/generated/output";
import { MenuItem } from "primeng/components/common/menuitem";
import { Subject } from "rxjs";
import { subscribeOn, takeUntil } from "rxjs/operators";
import { routerTransition } from "src/app/router.animations";
import { User } from "src/app/shared/generated";
import { AlertService } from "src/app/shared/modules";

import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

import {
    AcademicAdministrationWorkload,
    CommunityInstructionWorkload,
    ExecutiveManagementWorkload,
    FormalInstructionWorkload,
    PersonnelDevelopmentWorkload,
    PublicServiceWorkload,
    ResearchWorkload,
    SupervisionWorkload
} from "../../../shared/generated/output";
import { WorkloadService } from "../../../shared/services/workload.service";
import { FormalInstructionService } from "../../activity/formal-instruction/formal-instruction.service";
import { ResearchService } from "../../activity/research/research.service";
import { UserService } from "../../admin/user/user.service";
import { ChartOptions } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
    selector: "app-profile-view",
    moduleId: module.id,
    templateUrl: "profile-view.component.html",
    styleUrls: ["profile-view.component.scss"],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    // @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

    // Utility properties
    breadcrumbs: MenuItem[];
    teachingPieData: any = {};
    teachingPieOptions;
    researchPieData: any = {};
    researchPieOptions;
    servicePieData: any = {};
    servicePieOptions: ChartOptions;

    // Data properties
    userId = this.userService.currentUserIdStatic();
    user: User;
    profilePicture;
    profilePictureLoading: boolean;
    imageUrl;

    // Workload properties
    annualHours;
    totalHoursPerUser;
    teachingHours;
    researchHours;
    serviceHours;

    totalWorkload: TotalWorkload;
    teachingWorkload: any;
    serviceWorkload: any;

    private unsubscribe = new Subject();
    //TODO: Refresh charts
    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private workloadService: WorkloadService,
        public sanitizer: DomSanitizer
    ) {
        // this.getData();
    }

    ngOnInit() {
        this.breadcrumbs = [
            { label: "profile" },
            {
                label: this.userService.currentUserIdStatic(),
                url: "profile"
            }
        ];
        this.getUser();
        this.getTeachingHours();
        this.getResearchHours();
        this.getServiceHours();
        this.getAnnualHours();
        this.getTotalWorkload();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onEdit(event): void {
        this.router.navigate(["profile/edit"]);
    }
    onChangePassword(event): void {
        this.router.navigate(["profile/change-password"]);
    }
    onChangeProfilePicture(event) {
        this.router.navigate(["profile/profile-picture"]);
    }

    getUser() {
        this.userService
            .getUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.user = result.data.user;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.error(err);
                }
            );
    }
    // RATIOS
    getTeachingHours() {
        this.workloadService
            .teachingHours(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.teachingHours = result.data.teachingHours;
                    /// this.chart.chart.update({ lazy: true });
                },
                err => {
                    console.error(err);
                }
            );
    }
    getResearchHours() {
        this.workloadService
            .researchHours(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.researchHours = result.data.researchHours;
                },
                err => {
                    console.error(err);
                }
            );
    }
    getServiceHours() {
        this.workloadService
            .serviceHours(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.serviceHours = result.data.serviceHours;
                },
                err => {
                    console.error(err);
                }
            );
    }
    getAnnualHours() {
        this.workloadService
            .annualHours()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.annualHours = result.data.annualHours;
                },
                err => {
                    console.error(err);
                }
            );
    }
    getTotalHoursPerUser() {
        this.workloadService
            .totalHoursPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.totalHoursPerUser = result.data.totalHoursPerUser;
                },
                err => {
                    console.error(err);
                }
            );
    }

    // WORKLOADS
    researchChart() {
        // Total research hours
        let totalResearchHours = 0;
        if (this.totalWorkload.researchWorkload !== null) {
            totalResearchHours += this.totalWorkload.researchWorkload
                .totalHoursPerUser;
        }

        let completedHours = totalResearchHours;
        if (totalResearchHours > this.serviceHours) {
            completedHours = this.serviceHours;
        }

        let remainingHours = this.serviceHours - totalResearchHours;
        if (totalResearchHours > this.serviceHours) {
            remainingHours = 0;
        }

        let excessHours = 0;
        if (totalResearchHours > this.serviceHours) {
            excessHours = totalResearchHours - this.serviceHours;
        }

        this.researchPieData = {
            labels: ["Excess", "Complete", "Remaining"],
            datasets: [
                {
                    data: [excessHours, completedHours, remainingHours],
                    backgroundColor: ["#de425b", "#439981", "#aecdc2"],
                    hoverBackgroundColor: ["#e66572", "#6aaa96", "#cfdfd9"]
                }
            ]
        };
    }
    teachingChart() {
        // Total teaching hours
        let totalTeachingHours = 0;
        if (this.totalWorkload.formalInstructionWorkload) {
            totalTeachingHours += this.totalWorkload.formalInstructionWorkload
                .totalHoursPerUser;
        }
        if (this.totalWorkload.supervisionWorkload) {
            totalTeachingHours += this.totalWorkload.supervisionWorkload
                .totalHoursPerUser;
        }

        let completedHours = totalTeachingHours;
        if (totalTeachingHours > this.teachingHours) {
            completedHours = this.teachingHours;
        }

        let remainingHours = this.teachingHours - totalTeachingHours;
        if (totalTeachingHours > this.teachingHours) {
            remainingHours = 0;
        }

        let excessHours = 0;
        if (totalTeachingHours > this.teachingHours) {
            excessHours = totalTeachingHours - this.teachingHours;
        }

        this.teachingPieData = {
            labels: ["Excess", "Complete", "Remaining"],
            datasets: [
                {
                    data: [excessHours, completedHours, remainingHours],
                    backgroundColor: ["#de425b", "#439981", "#aecdc2"],
                    hoverBackgroundColor: ["#e66572", "#6aaa96", "#cfdfd9"]
                }
            ]
        };
    }
    serviceChart() {
        // Total service hours
        let totalServiceHours = 0;
        if (this.totalWorkload.academicAdministrationWorkload !== null) {
            totalServiceHours += this.totalWorkload
                .academicAdministrationWorkload.totalHoursPerUser;
        }
        if (this.totalWorkload.communityInstructionWorkload !== null) {
            totalServiceHours += this.totalWorkload.communityInstructionWorkload
                .totalHoursPerUser;
        }
        if (this.totalWorkload.executiveManagementWorkload !== null) {
            totalServiceHours += this.totalWorkload.executiveManagementWorkload
                .totalHoursPerUser;
        }
        if (this.totalWorkload.personnelDevelopmentWorkload !== null) {
            totalServiceHours += this.totalWorkload.personnelDevelopmentWorkload
                .totalHoursPerUser;
        }
        if (this.totalWorkload.publicServiceWorkload !== null) {
            totalServiceHours += this.totalWorkload.publicServiceWorkload
                .totalHoursPerUser;
        }

        let completedHours = totalServiceHours;
        if (totalServiceHours > this.serviceHours) {
            completedHours = this.serviceHours;
        }

        let remainingHours = this.serviceHours - totalServiceHours;
        if (totalServiceHours > this.serviceHours) {
            remainingHours = 0;
        }

        let excessHours = 0;
        if (totalServiceHours > this.serviceHours) {
            excessHours = totalServiceHours - this.serviceHours;
        }

        this.servicePieData = {
            labels: ["Excess", "Complete", "Remaining"],
            datasets: [
                {
                    data: [excessHours, completedHours, remainingHours],
                    backgroundColor: ["#de425b", "#439981", "#aecdc2"],
                    hoverBackgroundColor: ["#e66572", "#6aaa96", "#cfdfd9"]
                }
            ]
        };

        this.servicePieOptions = {
            elements: {}
        };
    }
    getTotalWorkload() {
        this.workloadService
            .totalWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.totalWorkload = result.data.totalWorkload;
                    this.teachingChart();
                    this.researchChart();
                    this.serviceChart();
                },
                err => {
                    console.error(err);
                }
            );
    }

    public getData() {
        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.user = result.data.user;
                    this.getProfilePic(this.user.photoUrl);
                },
                err => {
                    console.error(err);
                }
            );
    }
    public clearMessage(): void {
        this.alertService.clear();
    }
    public currentUserId() {
        return this.userService.currentUserIdStatic();
    }
    public getProfilePic(imageUrl: string) {
        this.profilePictureLoading = true;
        this.userService
            .getProfilePicture(imageUrl)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.createImageFromBlob(result);
                    this.profilePictureLoading = false;
                },
                err => {
                    this.profilePictureLoading = false;
                    console.error(err);
                }
            );
    }
    public createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                this.profilePicture = reader.result;
            },
            false
        );

        if (image) {
            reader.readAsDataURL(image);
        }
    }
}
