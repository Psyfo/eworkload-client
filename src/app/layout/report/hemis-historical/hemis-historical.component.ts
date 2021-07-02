import { IUser } from './../../admin/user/user.interface';
import { IDuty } from './../../admin/duty/duty.interface';
import * as html2canvas from "html2canvas";
import * as jsPDF from "jspdf";
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { AlertService } from "src/app/shared/modules";
import { WorkloadService } from "src/app/shared/services";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


import { UserService } from "../../admin/user/user.service";

@Component({
    selector: "app-hemis-historical",
    templateUrl: "./hemis-historical.component.html",
    styleUrls: ["./hemis-historical.component.scss"]
})
export class HemisHistoricalComponent implements OnInit {
    @ViewChild("hemis") hemis: ElementRef;
    @ViewChild("userData") userData: ElementRef;
    @ViewChild("dutyData") dutyData: ElementRef;

    // userId: string = this.userService.currentUserIdStatic();
    // user: IUser;
    // fiLoading: boolean = false;
    // ciLoading: boolean = false;
    // rLoading: boolean = false;
    // psLoading: boolean = false;
    // sLoading: boolean = false;
    // aaLoading: boolean = false;
    // emLoading: boolean = false;
    // pdLoading: boolean = false;

    duties: IDuty[];

    // academicAdministrationWorkload: AcademicAdministrationWorkload = {};
    // communityInstructionWorkload: CommunityInstructionWorkload = {};
    // executiveManagementWorkload: ExecutiveManagementWorkload = {};
    // formalInstructionWorkload: FormalInstructionWorkload = {};
    // personnelDevelopmentWorkload: PersonnelDevelopmentWorkload = {};
    // publicServiceWorkload: PublicServiceWorkload = {};
    // researchWorkload: ResearchWorkload = {};
    // supervisionWorkload: SupervisionWorkload = {};

    // formalInstructionTotalHoursPerActivityArray = [];

    // totalHoursPerUser;
    // totalPercentage;

    // teachingHours;
    // researchHours;
    // serviceHours;
    // annualHours;

    private unsubscribe = new Subject();
    constructor(
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,
        private workloadService: WorkloadService
    ) {}

    ngOnInit() {
        // this.getUser();
        // this.getTotalHoursPerUser();

        // this.getAcademicAdministrationWorkload();
        // this.getCommunityInstructionWorkload();
        // this.getExecutiveManagementWorkload();
        // this.getFormalInstructionWorkload();
        // this.getPersonnelDevelopmentWorkload();
        // this.getPublicServiceWorkload();
        // this.getResearchWorkload();
        // this.getSupervisionWorkload();
    }
    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    }
    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // getUser() {
    //     // this.userService
    //     //     .getUser(this.userId)
    //     //     .pipe(takeUntil(this.unsubscribe))
    //     //     .subscribe(result => {
    //     //         this.user = result.data.user;
    //     //     });
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

    // onPrint(event) {
    //     // const filename = `${this.userId}_hemis_${new Date().getFullYear()}.pdf`;

    //     // let pdf = new jsPDF("l", "mm", "letter");
    //     // let options = { margins: 10 };

    //     // const userData = this.userData.nativeElement;
    //     // const dutyData = this.dutyData.nativeElement;
    //     // setTimeout(() => {
    //     //     pdf.addHTML(userData, 0, 0, options, () => {});
    //     //     pdf.addPage("letter", "l");
    //     //     pdf.addHTML(dutyData, 0, 0, options, () => {});
    //     //     let blob = pdf.output("blob");
    //     //     window.open(URL.createObjectURL(blob));
    //     //     pdf.save(filename);
    //     //     this.alertService.infoToast("Printed hemis");
    //     // }, 600);

    //     // const specialElementHandlers = {
    //     //     '#editor': function(element, renderer) {
    //     //         return true;
    //     //     }
    //     // };
    //     // const hemis = this.hemis.nativeElement;
    //     // pdf.fromHTML(hemis.innerHTML, 15, 15, {
    //     //     width: 800,
    //     //     elementHandlers: specialElementHandlers
    //     // });
    //     // pdf.save(filename);
    // }
    // onPrint2(event) {
    //     let printContents = document.getElementById("hemis2").innerHTML;
    //     let originalContents = document.body.innerHTML;

    //     document.body.innerHTML = printContents;

    //     window.print();

    //     document.body.innerHTML = originalContents;
    //     return false;
    // }
    // onMail(event) {
    //     this.alertService.infoToast("Mail to HoD WIP");
    // }
}
