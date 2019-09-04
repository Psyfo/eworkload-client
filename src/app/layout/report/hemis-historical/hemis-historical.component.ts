import { Component, OnInit } from '@angular/core';
import {
    User,
    Duty,
    AcademicAdministrationWorkloadPerUser,
    CommunityInstructionWorkloadPerUser,
    ExecutiveManagementWorkloadPerUser,
    FormalInstructionWorkloadPerUser,
    PersonnelDevelopmentWorkloadPerUser,
    PublicServiceWorkloadPerUser,
    ResearchWorkloadPerUser,
    SupervisionWorkloadPerUser
} from 'src/app/shared/generated';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/modules';
import { UserService } from '../../admin/user/user.service';
import { WorkloadService } from 'src/app/shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-hemis-historical',
    templateUrl: './hemis-historical.component.html',
    styleUrls: ['./hemis-historical.component.scss']
})
export class HemisHistoricalComponent implements OnInit {
    userId: string = this.userService.currentUserIdStatic();
    user: User;
    fiLoading: boolean;
    ciLoading: boolean;
    rLoading: boolean;
    psLoading: boolean;
    sLoading: boolean;
    aaLoading: boolean;
    emLoading: boolean;
    pdLoading: boolean;

    duties: Duty[];

    academicAdministrationWorkload: AcademicAdministrationWorkloadPerUser;
    communityInstructionWorkload: CommunityInstructionWorkloadPerUser;
    executiveManagementWorkload: ExecutiveManagementWorkloadPerUser;
    formalInstructionWorkload: FormalInstructionWorkloadPerUser;
    personnelDevelopmentWorkload: PersonnelDevelopmentWorkloadPerUser;
    publicServiceWorkload: PublicServiceWorkloadPerUser;
    researchWorkload: ResearchWorkloadPerUser;
    supervisionWorkload: SupervisionWorkloadPerUser;
    totalHoursPerUser;
    totalPercentage;

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
    getAcademicAdministrationWorkload() {
        this.workloadService
            .academicAdministrationWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.aaLoading = false;
                this.aaLoading = result.loading;
                this.academicAdministrationWorkload =
                    result.data.academicAdministrationWorkloadPerUser;
            });
    }
    getCommunityInstructionWorkload() {
        this.workloadService
            .communityInstructionWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.ciLoading = false;
                this.ciLoading = result.loading;
                this.communityInstructionWorkload =
                    result.data.communityInstructionWorkloadPerUser;
            });
    }
    getExecutiveManagementWorkload() {
        this.workloadService
            .executiveManagementWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.emLoading = false;
                this.emLoading = result.loading;
                this.executiveManagementWorkload =
                    result.data.executiveManagementWorkloadPerUser;
            });
    }
    getFormalInstructionWorkload() {
        this.workloadService
            .formalInstructionWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.fiLoading = false;
                this.fiLoading = result.loading;
                this.formalInstructionWorkload =
                    result.data.formalInstructionWorkloadPerUser;
            });
    }
    getPersonnelDevelopmentWorkload() {
        this.workloadService
            .personnelDevelopmentWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.pdLoading = false;
                this.pdLoading = result.loading;
                this.personnelDevelopmentWorkload =
                    result.data.personnelDevelopmentWorkloadPerUser;
            });
    }
    getPublicServiceWorkload() {
        this.workloadService
            .publicServiceWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.psLoading = false;
                this.psLoading = result.loading;
                this.publicServiceWorkload =
                    result.data.publicServiceWorkloadPerUser;
            });
    }
    getResearchWorkload() {
        this.workloadService
            .researchWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.rLoading = false;
                this.rLoading = result.loading;
                this.researchWorkload = result.data.researchWorkloadPerUser;
            });
    }
    getSupervisionWorkload() {
        this.workloadService
            .supervisionWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.sLoading = false;
                this.sLoading = result.loading;
                this.supervisionWorkload =
                    result.data.supervisionWorkloadPerUser;
            });
    }

    getTotalPercentage() {
        this.totalPercentage =
            this.formalInstructionWorkload
                .formalInstructionPercentageOfAnnualHoursPerUser +
            this.communityInstructionWorkload
                .communityInstructionPercentageOfAnnualHoursPerUser +
            this.researchWorkload.researchPercentageOfAnnualHoursPerUser +
            this.publicServiceWorkload
                .publicServicePercentageOfAnnualHoursPerUser +
            this.academicAdministrationWorkload
                .academicAdministrationPercentageOfAnnualHoursPerUser +
            this.personnelDevelopmentWorkload
                .personnelDevelopmentPercentageOfAnnualHoursPerUser +
            this.executiveManagementWorkload
                .executiveManagementPercentageOfTotalHoursPerUser;
    }
    getTotalHoursPerUser() {
        this.workloadService
            .totalHoursPerUser(this.userService.currentUserIdStatic())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.totalHoursPerUser = result.data.totalHoursPerUser;
                    console.log(
                        'Total Hours Per User:',
                        this.totalHoursPerUser
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
}
