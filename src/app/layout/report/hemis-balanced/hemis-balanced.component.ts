import { IDuty } from './../../admin/duty/duty.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AlertService } from 'src/app/shared/modules';
import { WorkloadService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AcademicAdministrationService } from '../../activity/academic-administration/academic-administration.service';
import { CommunityInstructionService } from '../../activity/community-instruction/community-instruction.service';
import { ExecutiveManagementService } from '../../activity/executive-management/executive-management.service';
import { FormalInstructionService } from '../../activity/formal-instruction/formal-instruction.service';
import { PersonnelDevelopmentService } from '../../activity/personnel-development/personnel-development.service';
import { PublicServiceService } from '../../activity/public-service/public-service.service';
import { ResearchService } from '../../activity/research/research.service';
import { SupervisionService } from '../../activity/supervision/supervision.service';
import { UserService } from '../../admin/user/user.service';
import { IUser } from '../../admin/user/user.interface';

@Component({
    selector: 'app-hemis-balanced',
    templateUrl: './hemis-balanced.component.html',
    styleUrls: ['./hemis-balanced.component.scss']
})
export class HemisBalancedComponent implements OnInit {
    userId: string = this.userService.currentUserIdStatic();
    user: IUser;
    fiLoading: boolean = false;
    ciLoading: boolean = false;
    rLoading: boolean = false;
    psLoading: boolean = false;
    sLoading: boolean = false;
    aaLoading: boolean = false;
    emLoading: boolean = false;
    pdLoading: boolean = false;

    duties: IDuty[];

    // academicAdministrationWorkload: AcademicAdministrationWorkload = {};
    // communityInstructionWorkload: CommunityInstructionWorkload = {};
    // executiveManagementWorkload: ExecutiveManagementWorkload = {};
    // formalInstructionWorkload: FormalInstructionWorkload = {};
    // personnelDevelopmentWorkload: PersonnelDevelopmentWorkload = {};
    // publicServiceWorkload: PublicServiceWorkload = {};
    // researchWorkload: ResearchWorkload = {};
    // supervisionWorkload: SupervisionWorkload = {};

    totalHoursPerUser;
    totalPercentage;

    teachingHours;
    researchHours;
    serviceHours;
    annualHours;

    private unsubscribe = new Subject();
    constructor(
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,
        private workloadService: WorkloadService
    ) {}

    ngOnInit() {
        // this.getUser();
        // this.getAnnualHours();

        // this.getAcademicAdministrationWorkload();
        // this.getCommunityInstructionWorkload();
        // this.getExecutiveManagementWorkload();
        // this.getFormalInstructionWorkload();
        // this.getPersonnelDevelopmentWorkload();
        // this.getPublicServiceWorkload();
        // this.getResearchWorkload();
        // this.getSupervisionWorkload();
    }
    // ngOnDestroy(): void {
    //     this.unsubscribe.next();
    //     this.unsubscribe.complete();
    // }

    // getUser() {
    //     this.userService
    //         .getUser(this.userId)
    //         .pipe(takeUntil(this.unsubscribe))
    //         .subscribe(result => {
    //             this.user = result.data.user;
    //         });
    // }

    // getTeachingHours(userId: string) {
    //     this.workloadService
    //         .teachingHours(userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.teachingHours = result.data.teachingHours;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getResearchHours(userId: string) {
    //     this.workloadService
    //         .researchHours(userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.researchHours = result.data.researchHours;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getServiceHours(userId: string) {
    //     this.workloadService
    //         .serviceHours(userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.serviceHours = result.data.serviceHours;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getAnnualHours() {
    //     this.workloadService
    //         .annualHours()
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.annualHours = result.data.annualHours;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getTotalHoursPerUser() {
    //     this.workloadService
    //         .totalHoursPerUser(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.totalHoursPerUser = result.data.totalHoursPerUser;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }

    // // Workloads
    // getAcademicAdministrationWorkload() {
    //     this.workloadService
    //         .academicAdministrationWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.academicAdministrationWorkload =
    //         //             result.data.academicAdministrationWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getCommunityInstructionWorkload() {
    //     this.workloadService
    //         .communityInstructionWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.communityInstructionWorkload =
    //         //             result.data.communityInstructionWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getExecutiveManagementWorkload() {
    //     this.workloadService
    //         .executiveManagementWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.executiveManagementWorkload =
    //         //             result.data.executiveManagementWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getFormalInstructionWorkload() {
    //     this.workloadService
    //         .formalInstructionWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.formalInstructionWorkload =
    //         //             result.data.formalInstructionWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getPersonnelDevelopmentWorkload() {
    //     this.workloadService
    //         .personnelDevelopmentWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.personnelDevelopmentWorkload =
    //         //             result.data.personnelDevelopmentWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getPublicServiceWorkload() {
    //     this.workloadService
    //         .publicServiceWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.publicServiceWorkload =
    //         //             result.data.publicServiceWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getResearchWorkload() {
    //     this.workloadService
    //         .researchWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.researchWorkload = result.data.researchWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
    // getSupervisionWorkload() {
    //     this.workloadService
    //         .supervisionWorkload(this.userId)
    //         // .pipe(takeUntil(this.unsubscribe))
    //         // .subscribe(
    //         //     result => {
    //         //         this.supervisionWorkload = result.data.supervisionWorkload;
    //         //     },
    //         //     err => {
    //         //         this.alertService.errorToast(err);
    //         //         console.warn(err);
    //         //     }
    //         // );
    // }
}
