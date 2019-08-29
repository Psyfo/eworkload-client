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

    duties: Duty[];

    academicAdministrationWorkload: AcademicAdministrationWorkloadPerUser;
    communityInstructionWorkload: CommunityInstructionWorkloadPerUser;
    executiveManagementWorkload: ExecutiveManagementWorkloadPerUser;
    formalInstructionWorkload: FormalInstructionWorkloadPerUser;
    personnelDevelopmentWorkload: PersonnelDevelopmentWorkloadPerUser;
    publicServiceWorkload: PublicServiceWorkloadPerUser;
    researchWorkload: ResearchWorkloadPerUser;
    supervisionWorkload: SupervisionWorkloadPerUser;

    private unsubscribe = new Subject();
    constructor(
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,
        private workloadService: WorkloadService
    ) {}

    async ngOnInit() {
        this.getUser();
        await this.getAcademicAdministrationWorkload();
        this.getCommunityInstructionWorkload();
        this.getExecutiveManagementWorkload();
        await this.getFormalInstructionWorkload();
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
                this.academicAdministrationWorkload =
                    result.data.academicAdministrationWorkloadPerUser;
            });
    }
    getCommunityInstructionWorkload() {
        this.workloadService
            .communityInstructionWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.communityInstructionWorkload =
                    result.data.communityInstructionWorkloadPerUser;
            });
    }
    getExecutiveManagementWorkload() {
        this.workloadService
            .executiveManagementWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.executiveManagementWorkload =
                    result.data.executiveManagementWorkloadPerUser;
            });
    }
    getFormalInstructionWorkload() {
        this.workloadService
            .formalInstructionWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.formalInstructionWorkload =
                    result.data.formalInstructionWorkloadPerUser;
                console.log(this.formalInstructionWorkload);
            });
    }
    getPersonnelDevelopmentWorkload() {
        this.workloadService
            .personnelDevelopmentWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.personnelDevelopmentWorkload =
                    result.data.personnelDevelopmentWorkloadPerUser;
            });
    }
    getPublicServiceWorkload() {
        this.workloadService
            .publicServiceWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.publicServiceWorkload =
                    result.data.publicServiceWorkloadPerUser;
            });
    }
    getResearchWorkload() {
        this.workloadService
            .researchWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.researchWorkload = result.data.researchWorkloadPerUser;
            });
    }
    getSupervisionWorkload() {
        this.workloadService
            .supervisionWorkloadPerUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.supervisionWorkload =
                    result.data.supervisionWorkloadPerUser;
            });
    }
}
