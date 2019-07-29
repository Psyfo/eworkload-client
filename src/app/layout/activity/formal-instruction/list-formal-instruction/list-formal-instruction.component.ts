import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import {
    Block,
    FormalInstructionActivity,
    FormalInstructionWorkloadPerUser,
    Module
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { WorkloadService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';

@Component({
    selector: 'app-list-formal-instruction',
    templateUrl: './list-formal-instruction.component.html',
    styleUrls: ['./list-formal-instruction.component.scss'],
    animations: [routerTransition()]
})
export class ListFormalInstructionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    loading: boolean;

    selectedActivity: FormalInstructionActivity;
    selectedWorkload: any;
    blocks: Block[];
    modules: Module[];

    activity: FormalInstructionActivity;
    activities: FormalInstructionActivity[];
    formalInstructionWorkload: FormalInstructionWorkloadPerUser;
    fiWorkloadData: any;

    userId: string;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private formalInstructionService: FormalInstructionService,
        private userService: UserService,
        private workloadService: WorkloadService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [{ label: 'activity' }, { label: 'lecturing' }];
        this.menuItems = [
            {
                label: 'View',
                icon: 'pi pi-search',
                command: event => this.onContextView(event)
            },
            {
                label: 'Edit',
                icon: 'pi pi-pencil',
                command: event => this.onContextEdit(event)
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: event => this.onContextDelete(event)
            }
        ];
        this.cols = [
            { field: 'userId', header: 'User ID' },
            { field: 'dutyId', header: 'Duty type' },
            { field: 'moduleId', header: 'Module Id' },
            { field: 'blockId', header: 'Block' },
            { field: 'offeringTypeId', header: 'Offering Type' },
            { field: 'qualificationId', header: 'Qualification' }
        ];

        this.getActivities();
        this.getWorkload();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    onAdd() {
        this.router.navigate(['activity/lecturing/add']);
    }

    getActivities() {
        this.formalInstructionService
            .formalInstructionActivitiesByUser(this.currentUser())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.loading = result.loading;
                this.activities = result.data.formalInstructionActivitiesByUser;
                console.log(this.activities);
            });
    }
    getWorkload() {
        this.workloadService
            .formalInstructionWorkloadPerUser(
                this.userService.currentUserIdStatic()
            )
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.formalInstructionWorkload =
                    result.data.formalInstructionWorkloadPerUser;
                this.fiWorkloadData = this.formalInstructionWorkload.formalInstructionWorkloadData;
                console.log(this.fiWorkloadData);
            });
    }
    onContextView(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            ['activity/lecturing/view', this.selectedActivity.activityId],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    onContextEdit(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            ['activity/lecturing/edit', this.selectedActivity.activityId],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    onContextDelete(event) {
        this.alertService.infoToast('Delete service coming soon');
    }
    onRowSelect(event) {
        const activityData: FormalInstructionActivity = event.data;
        console.log(activityData);

        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );
        this.router.navigate(
            ['activity/lecturing/view', this.selectedActivity.activityId],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    currentUser() {
        return this.userService.currentUserIdStatic();
    }
}
