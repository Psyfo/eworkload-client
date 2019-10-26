import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { subscribeOn, takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AcademicAdministrationWorkload,
    CommunityInstructionWorkload,
    ExecutiveManagementWorkload,
    FormalInstructionWorkload,
    PersonnelDevelopmentWorkload,
    PublicServiceWorkload,
    ResearchWorkload,
    SupervisionWorkload
} from '../../../shared/generated/output';
import { WorkloadService } from '../../../shared/services/workload.service';
import { FormalInstructionService } from '../../activity/formal-instruction/formal-instruction.service';
import { ResearchService } from '../../activity/research/research.service';
import { UserService } from '../../admin/user/user.service';
import { ChartOptions } from 'chart.js';

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

    academicAdministrationWorkload: AcademicAdministrationWorkload;
    communityInstructionWorkload: CommunityInstructionWorkload;
    executiveManagementWorkload: ExecutiveManagementWorkload;
    formalInstructionWorkload: FormalInstructionWorkload;
    personnelDevelopmentWorkload: PersonnelDevelopmentWorkload;
    publicServiceWorkload: PublicServiceWorkload;
    researchWorkload: ResearchWorkload;
    supervisionWorkload: SupervisionWorkload;
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
            { label: 'profile' },
            {
                label: this.userService.currentUserIdStatic(),
                url: 'profile'
            }
        ];
        this.getUser();
        this.getTeachingHours();
        this.getResearchHours();
        this.getServiceHours();
        this.getAnnualHours();
        this.getTotalHoursPerUser();

        this.getTeachingWorkload();
        this.getResearchWorkload();
        this.getServiceWorkload();
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
                    console.warn(err);
                }
            );
    }
    // Get ratios
    getTeachingHours() {
        this.workloadService
            .teachingHours(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.teachingHours = result.data.teachingHours;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
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
                    this.alertService.errorToast(err);
                    console.warn(err);
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
                    this.alertService.errorToast(err);
                    console.warn(err);
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
                    console.warn(err);
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
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    // Workloads
    getResearchWorkload() {
        this.workloadService
            .researchWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.researchWorkload = result.data.researchWorkload;

                    let completedHours = this.researchWorkload
                        .totalHoursPerUser;
                    if (
                        this.researchWorkload.totalHoursPerUser >
                        this.researchHours
                    ) {
                        completedHours = this.researchHours;
                    }

                    let remainingHours =
                        this.researchHours -
                        this.researchWorkload.totalHoursPerUser;
                    if (
                        this.researchWorkload.totalHoursPerUser >
                        this.researchHours
                    ) {
                        remainingHours = 0;
                    }

                    let excessHours = 0;
                    if (
                        this.researchWorkload.totalHoursPerUser >
                        this.researchHours
                    ) {
                        excessHours =
                            this.researchWorkload.totalHoursPerUser -
                            this.researchHours;
                    }

                    this.researchPieData = {
                        labels: ['Excess', 'Complete', 'Remaining'],
                        datasets: [
                            {
                                data: [
                                    excessHours,
                                    completedHours,
                                    remainingHours
                                ],
                                backgroundColor: [
                                    '#de425b',
                                    '#439981',
                                    '#aecdc2'
                                ],
                                hoverBackgroundColor: [
                                    '#e66572',
                                    '#6aaa96',
                                    '#cfdfd9'
                                ]
                            }
                        ]
                    };
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getTeachingWorkload() {
        this.workloadService
            .teachingWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    console.log('Teaching workload: ', result);
                    this.teachingWorkload = result;

                    const totalTeachingHours =
                        this.teachingWorkload.formalInstructionWorkload
                            .totalHoursPerUser +
                        this.teachingWorkload.supervisionWorkload
                            .totalHoursPerUser;

                    let completedHours = totalTeachingHours;
                    if (totalTeachingHours > this.teachingHours) {
                        completedHours = this.teachingHours;
                    }

                    let remainingHours =
                        this.teachingHours - totalTeachingHours;
                    if (totalTeachingHours > this.teachingHours) {
                        remainingHours = 0;
                    }

                    let excessHours = 0;
                    if (totalTeachingHours > this.teachingHours) {
                        excessHours = totalTeachingHours - this.teachingHours;
                    }

                    this.teachingPieData = {
                        labels: ['Excess', 'Complete', 'Remaining'],
                        datasets: [
                            {
                                data: [
                                    excessHours,
                                    completedHours,
                                    remainingHours
                                ],
                                backgroundColor: [
                                    '#de425b',
                                    '#439981',
                                    '#aecdc2'
                                ],
                                hoverBackgroundColor: [
                                    '#e66572',
                                    '#6aaa96',
                                    '#cfdfd9'
                                ]
                            }
                        ]
                    };
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                },
                () => {
                    console.log('Teaching workload loaded');
                }
            );
    }
    getServiceWorkload() {
        this.workloadService
            .serviceWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.serviceWorkload = result;

                    const totalServiceHours =
                        this.serviceWorkload.academicAdministrationWorkload
                            .totalHoursPerUser +
                        this.serviceWorkload.communityInstructionWorkload
                            .totalHoursPerUser +
                        this.serviceWorkload.executiveManagementWorkload
                            .totalHoursPerUser +
                        this.serviceWorkload.personnelDevelopmentWorkload
                            .totalHoursPerUser +
                        this.serviceWorkload.publicServiceWorkload
                            .totalHoursPerUser;

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
                        labels: ['Excess', 'Complete', 'Remaining'],
                        datasets: [
                            {
                                data: [
                                    excessHours,
                                    completedHours,
                                    remainingHours
                                ],
                                backgroundColor: [
                                    '#de425b',
                                    '#439981',
                                    '#aecdc2'
                                ],
                                hoverBackgroundColor: [
                                    '#e66572',
                                    '#6aaa96',
                                    '#cfdfd9'
                                ]
                            }
                        ]
                    };

                    this.servicePieOptions = {
                        elements: {}
                    };
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                },
                () => {
                    console.log('Service workload loaded');
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
