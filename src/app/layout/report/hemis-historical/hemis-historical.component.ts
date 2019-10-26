import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Duty, User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { WorkloadService } from 'src/app/shared/services';
import { of } from 'zen-observable';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
import { UserService } from '../../admin/user/user.service';

@Component({
    selector: 'app-hemis-historical',
    templateUrl: './hemis-historical.component.html',
    styleUrls: ['./hemis-historical.component.scss']
})
export class HemisHistoricalComponent implements OnInit {
    @ViewChild('hemis', { static: false }) hemis: ElementRef;

    userId: string = this.userService.currentUserIdStatic();
    user: User;
    fiLoading: boolean = false;
    ciLoading: boolean = false;
    rLoading: boolean = false;
    psLoading: boolean = false;
    sLoading: boolean = false;
    aaLoading: boolean = false;
    emLoading: boolean = false;
    pdLoading: boolean = false;

    duties: Duty[];

    academicAdministrationWorkload: AcademicAdministrationWorkload = {};
    communityInstructionWorkload: CommunityInstructionWorkload = {};
    executiveManagementWorkload: ExecutiveManagementWorkload = {};
    formalInstructionWorkload: FormalInstructionWorkload = {};
    personnelDevelopmentWorkload: PersonnelDevelopmentWorkload = {};
    publicServiceWorkload: PublicServiceWorkload = {};
    researchWorkload: ResearchWorkload = {};
    supervisionWorkload: SupervisionWorkload = {};

    formalInstructionTotalHoursPerActivityArray = [];

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
        this.getUser();
        this.getTotalHoursPerUser();

        this.getAcademicAdministrationWorkload();
        this.getCommunityInstructionWorkload();
        this.getExecutiveManagementWorkload();
        this.getFormalInstructionWorkload();
        this.getPersonnelDevelopmentWorkload();
        this.getPublicServiceWorkload();
        this.getResearchWorkload();
        this.getSupervisionWorkload();
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

    getUser() {
        this.userService
            .getUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = result.data.user;
            });
    }

    getTeachingHours(userId: string) {
        this.workloadService
            .teachingHours(userId)
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
    getResearchHours(userId: string) {
        this.workloadService
            .researchHours(userId)
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
    getServiceHours(userId: string) {
        this.workloadService
            .serviceHours(userId)
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
    getAcademicAdministrationWorkload() {
        this.workloadService
            .academicAdministrationWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.academicAdministrationWorkload =
                        result.data.academicAdministrationWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getCommunityInstructionWorkload() {
        this.workloadService
            .communityInstructionWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.communityInstructionWorkload =
                        result.data.communityInstructionWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getExecutiveManagementWorkload() {
        this.workloadService
            .executiveManagementWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.executiveManagementWorkload =
                        result.data.executiveManagementWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getFormalInstructionWorkload() {
        this.workloadService
            .formalInstructionWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.formalInstructionWorkload =
                        result.data.formalInstructionWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getPersonnelDevelopmentWorkload() {
        this.workloadService
            .personnelDevelopmentWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.personnelDevelopmentWorkload =
                        result.data.personnelDevelopmentWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getPublicServiceWorkload() {
        this.workloadService
            .publicServiceWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.publicServiceWorkload =
                        result.data.publicServiceWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getResearchWorkload() {
        this.workloadService
            .researchWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.researchWorkload = result.data.researchWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getSupervisionWorkload() {
        this.workloadService
            .supervisionWorkload(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.supervisionWorkload = result.data.supervisionWorkload;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    onPrint(event) {
        const filename = `${this.userId}_hemis_${new Date().getFullYear()}.pdf`;

        let pdf = new jsPDF();

        const specialElementHandlers = {
            '#editor': function(element, renderer) {
                return true;
            }
        };

        const hemis = this.hemis.nativeElement;
        console.log(pdf);

        console.log(hemis);

        pdf.fromHTML(hemis.innerHTML, 15, 15, {
            width: 800,
            elementHandlers: specialElementHandlers
        });

        pdf.save(filename);

        // const options = {
        //     background: 'white',
        //     height: hemis.clientHeight,
        //     width: hemis.clientWidth,
        //     scale: 1
        // };

        // html2canvas(hemis, options).then(canvas => {
        //     let pdf = new jsPDF({
        //         orientation: 'landscape',
        //         unit: 'in',
        //         format: [4, 2]
        //     });

        //     pdf.addImage(canvas.toDataURL('image/PNG'), 'PNG', 0, 0, 211, 298);

        //     let pdfOutput = pdf.output();
        //     let buffer = new ArrayBuffer(pdfOutput.length);
        //     let array = new Uint8Array(buffer);
        //     for (let i = 0; i < pdfOutput.length; i++) {
        //         array[i] = pdfOutput.charCodeAt(i);
        //     }
        //     pdf.save(filename);
        // });

        this.alertService.infoToast('Printed hemis');
    }
    onMail(event) {
        this.alertService.infoToast('Mail to HoD WIP');
    }
}
