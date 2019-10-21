import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import {
    Block,
    FormalInstructionActivity,
    Module,
    FormalInstructionActivityInput
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { WorkloadService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';
import { throwServerError } from 'apollo-link-http-common';

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

    activities: FormalInstructionActivity[];
    activity: FormalInstructionActivity;
    blocks: Block[];
    fiWorkloadData: any;
    modules: Module[];
    selectedActivity: FormalInstructionActivity;
    selectedWorkload: any;
    userId: string = this.userService.currentUserIdStatic();
    statuses = [
        { label: 'Awaiting' },
        { label: 'Approved' },
        { label: 'Review' }
    ];

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private formalInstructionService: FormalInstructionService,
        private userService: UserService,
        private workloadService: WorkloadService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'formal-instruction' }
        ];
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
            { field: 'module.moduleId', header: 'Module ID' },
            { field: 'module.name', header: 'Module' },
            { field: 'block.name', header: 'Block' },
            { field: 'offeringType.name', header: 'Offering Type' },
            { field: 'qualification.name', header: 'Qualification' },
            { field: 'approvalStatus', header: 'Approval Status' }
        ];

        this.getActivities();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    onAdd() {
        this.router.navigate(['activity/formal-instruction/add']);
    }

    getActivities() {
        this.formalInstructionService
            .formalInstructionActivitiesByUser(this.currentUser())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.loading = result.loading;
                    this.activities =
                        result.data.formalInstructionActivitiesByUser;
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }

    onContextView(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            [
                'activity/formal-instruction/view',
                this.selectedActivity.activityId
            ],
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
            [
                'activity/formal-instruction/edit',
                this.selectedActivity.activityId
            ],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    onContextDelete(event) {
        this.alertService.confirm('formalInstructionActivityDelete');
    }
    onReject() {
        this.alertService.clear();
    }
    onConfirm() {
        this.alertService.clear();
        const activityInput: FormalInstructionActivityInput = {
            moduleId: this.selectedActivity.moduleId,
            blockId: this.selectedActivity.blockId,
            offeringTypeId: this.selectedActivity.offeringTypeId,
            qualificationId: this.selectedActivity.qualificationId
        };
        this.formalInstructionService
            .deleteFormalInstructionActivity(activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {},
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
        this.alertService.successToast('Activity Deleted');
    }
    onRowSelect(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );
        this.router.navigate(
            [
                'activity/formal-instruction/view',
                this.selectedActivity.activityId
            ],
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
