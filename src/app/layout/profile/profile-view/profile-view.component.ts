import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { UserService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-view',
    moduleId: module.id,
    templateUrl: 'profile-view.component.html',
    styleUrls: ['profile-view.component.scss'],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    loading: boolean;
    errors: any;
    userId: string;
    user: User;

    workloadCurrent = 0;
    workloadTotal = 1575;
    formalInstructionCurrent: number = 50;
    formalInstructionTotal: number;
    researchCurrent: number = 17;
    researchTotal: number;
    serviceCurrent: number = 20;
    serviceTotal: number;

    private unsubscribe = new Subject();

    // Pie
    public formalInstructionChartLabels: string[] = [
        'Formal Instruction Current',
        'Formal Instruction Total'
    ];
    public formalInstructionChartData: number[] = [0, 0];
    public formalInstructionChartType: string = 'doughnut';

    public researchChartLabels: string[] = [
        'Research Current',
        'Research Total'
    ];
    public researchChartData: number[] = [0, 0];
    public researchChartType: string = 'doughnut';

    public supervisionChartLabels: string[] = [
        'Service Current',
        'Service Total'
    ];
    public supervisionChartData: number[] = [0, 0];
    public supervisionChartType: string = 'doughnut';

    public workloadChartLabels: string[] = [
        'Workload Current',
        'Workload Total'
    ];
    public workloadChartData: number[] = [0, 0];
    public workloadChartType: string = 'doughnut';

    constructor(
        private alertService: AlertService,
        private router: Router,
        private userService: UserService
    ) {
        this.getData();
    }

    ngOnInit() {
        this.getData();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onEdit(): void {
        this.router.navigate(['profile/edit']);
    }
    onChangePassword(): void {
        this.router.navigate(['profile/change-password']);
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public getData() {
        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = <User>(<unknown>result.data.user);

                if (this.user.workFocus.name == 'teaching') {
                    this.formalInstructionTotal = 945;
                    this.researchTotal = 315;
                    this.serviceTotal = 315;
                } else if ((this.user.workFocus.name = 'research')) {
                    this.formalInstructionTotal = 315;
                    this.researchTotal = 945;
                    this.serviceTotal = 315;
                } else if (this.user.workFocus.name == 'balanced') {
                    this.formalInstructionTotal = 630;
                    this.researchTotal = 630;
                    this.serviceTotal = 315;
                }

                this.workloadCurrent =
                    this.formalInstructionCurrent +
                    this.researchCurrent +
                    this.serviceCurrent;

                this.formalInstructionChartData = [
                    this.formalInstructionCurrent,
                    this.formalInstructionTotal
                ];
                this.researchChartData = [
                    this.researchCurrent,
                    this.researchTotal
                ];
                this.supervisionChartData = [
                    this.serviceCurrent,
                    this.serviceTotal
                ];
                this.workloadChartData = [
                    this.workloadCurrent,
                    this.workloadTotal
                ];
            });
    }

    public clearMessage(): void {
        this.alertService.clear();
    }
}
