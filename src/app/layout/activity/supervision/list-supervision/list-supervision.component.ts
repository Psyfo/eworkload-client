import { SupervisionActivityInput } from './../../../../shared/generated/output';
import { SupervisionService } from './../supervision.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SupervisionActivity } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { Router } from '@angular/router';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { WorkloadService } from 'src/app/shared/services';
import { routerTransition } from 'src/app/router.animations';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-list-supervision',
    templateUrl: './list-supervision.component.html',
    styleUrls: ['./list-supervision.component.scss'],
    animations: [routerTransition()]
})
export class ListSupervisionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    loading: any;
    activities: any;
    selectedActivity: SupervisionActivity;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private supervisionService: SupervisionService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [{ label: 'activity' }, { label: 'supervision' }];
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
            { field: 'supervisionRole', header: 'Supervision Role' },
            { field: 'split', header: 'Split' },
            { field: 'studentId', header: 'StudentId' }
        ];

        this.getActivities();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    onAdd() {
        this.router.navigate(['activity/supervision/add']);
    }

    getActivities() {
        this.supervisionService
            .supervisionActivitiesByUser(this.currentUser())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.loading = result.loading;
                this.activities = result.data.supervisionActivitiesByUser;
                console.log(this.activities);
            });
    }
    currentUser(): any {
        return this.userService.currentUserIdStatic();
    }

    onContextView(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            ['activity/supervision/view', this.selectedActivity.activityId],
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
            ['activity/supervision/edit', this.selectedActivity.activityId],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    onContextDelete(event) {
        this.alertService.confirm('supervisionActivityDelete');
    }
    onRowSelect(event) {
        const activityData: SupervisionActivity = event.data;
        console.log(activityData);

        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );
        this.router.navigate(
            ['activity/supervision/view', this.selectedActivity.activityId],
            {
                queryParams: {
                    activityId: this.selectedActivity.activityId
                }
            }
        );
    }
    onReject() {
        this.alertService.clear();
    }
    onConfirm() {
        this.alertService.clear();
        const activityInput: SupervisionActivityInput = {
            activityId: this.selectedActivity.activityId,
            supervisionRole: this.selectedActivity.supervisionRole,
            split: this.selectedActivity.split,
            studentId: this.selectedActivity.studentId
        };
        this.supervisionService
            .deleteSupervisionActivity(activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    console.log('Supervision activity deleted:', result.data);
                    this.alertService.successToast('Activity Deleted');
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                    console.warn(err);
                }
            );
    }
}
