import { routerTransition } from 'src/app/router.animations';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
    CommunityInstructionActivity,
    CommunityInstructionActivityInput
} from '../../../../shared/generated/output';
import { CommunityInstructionService } from '../community-instruction.service';

@Component({
    selector: 'app-list-community-instruction',
    templateUrl: './list-community-instruction.component.html',
    styleUrls: ['./list-community-instruction.component.scss'],
    animations: [routerTransition()]
})
export class ListCommunityInstructionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    loading: boolean;

    userId = this.userService.currentUserIdStatic();

    activities: CommunityInstructionActivity[];
    selectedActivity: CommunityInstructionActivity;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private communityInstructionService: CommunityInstructionService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            {
                label: 'community-instruction',
                url: 'activity/community-instruction'
            }
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
            {
                field: 'title',
                header: 'Title'
            },
            {
                field: 'description',
                header: 'Description'
            },
            {
                field: 'evidence',
                header: 'Evidence'
            }
        ];
        this.getActivities();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    getActivities() {
        this.communityInstructionService
            .communityInstructionActivitiesByUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.loading = result.loading;
                    this.activities =
                        result.data.communityInstructionActivitiesByUser;
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }

    onAdd() {
        try {
            this.router.navigate(['activity/community-instruction/add']);
        } catch (err) {
            console.log(err);
        }
    }
    onContextEdit(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            [
                'activity/community-instruction/edit',
                this.selectedActivity.activityId
            ],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    onContextView(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            [
                'activity/community-instruction/view',
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
        this.alertService.confirm('academicAdministrationActivityDelete');
    }
    onReject() {
        this.alertService.clear();
    }
    onConfirm() {
        this.alertService.clear();
        const activityInput: CommunityInstructionActivityInput = {
            activityId: this.selectedActivity.activityId
        };
        this.communityInstructionService
            .deleteCommunityInstructionActivity(activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.alertService.successToast('Activity Deleted');
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }
    onRowSelect(event) {
        const activityData: CommunityInstructionActivity = event.data;
        console.log(activityData);

        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );
        this.router.navigate(
            [
                'activity/community-instruction/view',
                this.selectedActivity.activityId
            ],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
}
