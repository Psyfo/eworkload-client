import {
    AcademicAdministrationWorkloadPerUser,
    FormalInstructionWorkloadPerUser,
    CommunityInstructionWorkloadPerUser,
    ExecutiveManagementWorkloadPerUser,
    PersonnelDevelopmentWorkloadPerUser,
    PublicServiceWorkloadPerUser,
    SupervisionWorkloadPerUser,
    ResearchWorkloadPerUser
} from './../../../shared/generated/output';
import { WorkloadService } from './../../../shared/services/workload.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../admin/user/user.service';
import { FormalInstructionService } from '../../activity/formal-instruction/formal-instruction.service';
import { ResearchService } from '../../activity/research/research.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-profile-view',
    moduleId: module.id,
    templateUrl: 'profile-view.component.html',
    styleUrls: ['profile-view.component.scss'],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    // Utility properties
    breadcrumbs: MenuItem[];
    researchData: any = {};
    formalInstructionData: any = {};
    academicAdministrationData: any = {};
    supervisionData: any = {};
    formalInstructionPieData: any = {};

    // Data properties
    userId: string;
    user: User;
    profilePicture;
    profilePictureLoading: boolean;
    imageUrl;
    academicAdministrationWorkloadPerUser: AcademicAdministrationWorkloadPerUser;
    communityInstructionWorkloadPerUser: CommunityInstructionWorkloadPerUser;
    executiveManagementWorkloadPerUser: ExecutiveManagementWorkloadPerUser;
    formalInstructionWorkloadPerUser: FormalInstructionWorkloadPerUser;
    personnelDevelopmentWorkloadPerUser: PersonnelDevelopmentWorkloadPerUser;
    publicServiceWorkloadPerUser: PublicServiceWorkloadPerUser;
    researchWorkloadPerUser: ResearchWorkloadPerUser;
    supervisionWorkloadPerUser: SupervisionWorkloadPerUser;

    // Workload properties
    annualHours = 1575;
    formalInstructionTotalHoursPerUser;
    formalInstructionPercentageOfAnnualHoursPerUser;
    teachingHours;
    researchHours;
    serviceHours;

    private unsubscribe = new Subject();
    //TODO: Refresh charts
    constructor(
        private alertService: AlertService,
        private router: Router,
        private userService: UserService,
        private workloadService: WorkloadService,
        private formalInstructionService: FormalInstructionService,
        private researchService: ResearchService,
        public sanitizer: DomSanitizer
    ) {
        this.getData();
    }

    async ngOnInit() {
        this.breadcrumbs = [
            { label: 'profile' },
            {
                label: this.userService.currentUserIdStatic(),
                url: 'profile'
            }
        ];
        this.getData();
        this.getTeachingHours();
        this.getResearchHours();
        this.getServiceHours();
        this.getAnnualHours();
        this.getFormalInstructionTotalHoursPerUser();
        this.getFormalInstructionPercentageOfAnnualHoursPerUser();
        this.getResearchWorkloadPerUser();
        this.getAcademicAdministrationWorkloadPerUser();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onEdit(event): void {
        this.router.navigate(['profile/edit']);
    }
    onChangePassword(event): void {
        this.router.navigate(['profile/change-password']);
    }
    getTeachingHours() {
        this.workloadService
            .teachingHours(this.userService.currentUserIdStatic())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.teachingHours = result.data.teachingHours;
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    getResearchHours() {
        this.workloadService
            .researchHours(this.userService.currentUserIdStatic())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.researchHours = result.data.researchHours;
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    getServiceHours() {
        this.workloadService
            .serviceHours(this.userService.currentUserIdStatic())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.serviceHours = result.data.serviceHours;
                },
                err => {
                    this.alertService.errorToast(err);
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
                    this.alertService.errorToast(err);
                }
            );
    }
    getFormalInstructionTotalHoursPerUser() {
        this.formalInstructionService
            .formalInstructionTotalHoursPerUser(this.currentUserId())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.formalInstructionTotalHoursPerUser =
                        result.data.formalInstructionTotalHoursPerUser;

                    let complete = this.formalInstructionTotalHoursPerUser;
                    if (
                        this.formalInstructionTotalHoursPerUser >
                        this.teachingHours
                    ) {
                        complete = this.teachingHours;
                    }
                    let remaining =
                        this.teachingHours -
                        this.formalInstructionTotalHoursPerUser;
                    if (
                        this.formalInstructionTotalHoursPerUser >
                        this.teachingHours
                    ) {
                        remaining = 0;
                    }
                    let excess = 0;
                    if (
                        this.formalInstructionTotalHoursPerUser >
                        this.teachingHours
                    ) {
                        excess =
                            this.formalInstructionTotalHoursPerUser -
                            this.teachingHours;
                    }

                    this.formalInstructionPieData = {
                        labels: ['Hours complete', 'Hours remaining', 'Excess'],
                        datasets: [
                            {
                                data: [complete, remaining, excess],
                                backgroundColor: [
                                    '#00fc04',
                                    '#888888',
                                    '#cc0000'
                                ],
                                hoverBackgroundColor: [
                                    '#00fc04',
                                    '#888888',
                                    '#cc0000'
                                ]
                            }
                        ]
                    };
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    getFormalInstructionPercentageOfAnnualHoursPerUser() {
        this.formalInstructionService
            .formalInstructionPercentageOfAnnualHoursPerUser(
                this.currentUserId()
            )
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.formalInstructionPercentageOfAnnualHoursPerUser =
                        result.data.formalInstructionPercentageOfAnnualHoursPerUser;
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }

    getResearchWorkloadPerUser() {
        this.workloadService
            .researchWorkloadPerUser(this.currentUserId())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.researchWorkloadPerUser =
                        result.data.researchWorkloadPerUser;

                    let complete = this.researchWorkloadPerUser
                        .researchTotalHoursPerUser;
                    if (this.researchWorkloadPerUser > this.researchHours) {
                        complete = this.researchHours;
                    }
                    let remaining =
                        this.researchHours -
                        this.researchWorkloadPerUser.researchTotalHoursPerUser;
                    if (this.researchWorkloadPerUser > this.researchHours) {
                        remaining = 0;
                    }
                    let excess = 0;
                    if (
                        this.researchWorkloadPerUser.researchTotalHoursPerUser >
                        this.researchHours
                    ) {
                        excess =
                            this.researchWorkloadPerUser
                                .researchTotalHoursPerUser - this.researchHours;
                    }

                    this.researchData = {
                        labels: ['Complete', 'Remaining', 'Excess'],
                        datasets: [
                            {
                                data: [complete, remaining, excess],
                                backgroundColor: [
                                    '#00fc04',
                                    '#888888',
                                    '#cc0000'
                                ],
                                hoverBackgroundColor: [
                                    '#00fc04',
                                    '#888888',
                                    '#cc0000'
                                ]
                            }
                        ]
                    };
                },
                error => {
                    this.alertService.errorToast(error);
                }
            );
    }

    getAcademicAdministrationWorkloadPerUser() {
        this.workloadService
            .academicAdministrationWorkloadPerUser(this.currentUserId())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.academicAdministrationWorkloadPerUser =
                        result.data.academicAdministrationWorkloadPerUser;

                    let complete = this.academicAdministrationWorkloadPerUser
                        .academicAdministrationTotalHoursPerUser;
                    if (
                        this.academicAdministrationWorkloadPerUser >
                        this.serviceHours
                    ) {
                        complete = this.serviceHours;
                    }
                    let remaining =
                        this.serviceHours -
                        this.academicAdministrationWorkloadPerUser
                            .academicAdministrationTotalHoursPerUser;
                    if (
                        this.academicAdministrationWorkloadPerUser >
                        this.serviceHours
                    ) {
                        remaining = 0;
                    }
                    let excess = 0;
                    if (
                        this.academicAdministrationWorkloadPerUser
                            .academicAdministrationTotalHoursPerUser >
                        this.serviceHours
                    ) {
                        excess =
                            this.academicAdministrationWorkloadPerUser
                                .academicAdministrationTotalHoursPerUser -
                            this.serviceHours;
                    }

                    this.academicAdministrationData = {
                        labels: ['Complete', 'Remaining', 'Excess'],
                        datasets: [
                            {
                                data: [complete, remaining, excess],
                                backgroundColor: [
                                    '#00fc04',
                                    '#888888',
                                    '#cc0000'
                                ],
                                hoverBackgroundColor: [
                                    '#00fc04',
                                    '#888888',
                                    '#cc0000'
                                ]
                            }
                        ]
                    };
                },
                error => {
                    this.alertService.errorToast(error, 'errorToast');
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
                    this.alertService.errorToast(err);
                    console.warn(err);
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
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    public createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener(
            'load',
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
