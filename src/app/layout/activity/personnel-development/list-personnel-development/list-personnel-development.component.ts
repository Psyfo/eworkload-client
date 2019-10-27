import { UserService } from './../../../admin/user/user.service';
import {
    PersonnelDevelopmentActivity,
    PersonnelDevelopmentActivityInput
} from './../../../../shared/generated/output';
import { MenuItem } from 'primeng/components/common/menuitem';
import { PersonnelDevelopmentService } from './../personnel-development.service';
import { Router } from '@angular/router';
import { AlertService } from './../../../../shared/modules/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

@Component({
    selector: 'app-list-personnel-development',
    templateUrl: './list-personnel-development.component.html',
    styleUrls: ['./list-personnel-development.component.scss'],
    animations: [routerTransition()]
})
export class ListPersonnelDevelopmentComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    loading: boolean;

    activities: PersonnelDevelopmentActivity[];
    selectedActivity: PersonnelDevelopmentActivity;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private personnelDevelopmentService: PersonnelDevelopmentService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.getActivities();
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'personnel-development' }
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
            { field: 'title', header: 'Title' },
            {
                field: 'date',
                header: 'Date(s)'
            },
            { field: 'duration', header: 'Duration' }
        ];
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onAdd() {
        this.router.navigate(['activity/personnel-development/add']);
    }
    getActivities() {
        const userId = this.userService.currentUserIdStatic();
        this.personnelDevelopmentService
            .personnelDevelopmentActivitiesByUser(userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.activities =
                        result.data.personnelDevelopmentActivitiesByUser;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    onContextView(event) {
        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );

        this.router.navigate(
            [
                'activity/personnel-development/view',
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
                'activity/personnel-development/edit',
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
        this.alertService.confirm('personnelDevelopmentActivityDelete');
    }
    onReject() {
        this.alertService.clear();
    }
    onConfirm() {
        this.alertService.clear();
        const activityInput: PersonnelDevelopmentActivityInput = {
            activityId: this.selectedActivity.activityId
        };
        this.personnelDevelopmentService
            .deletePersonnelDevelopmentActivity(activityInput)
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
        const activityData: PersonnelDevelopmentActivity = event.data;
        console.log(activityData);

        this.alertService.infoToast(
            `Activity: ${this.selectedActivity.activityId} selected`
        );
        this.router.navigate(
            [
                'activity/personnel-development/view',
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
