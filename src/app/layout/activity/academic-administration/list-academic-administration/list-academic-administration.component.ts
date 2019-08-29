import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AcademicAdministrationActivity } from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { AcademicAdministrationService } from '../academic-administration.service';

@Component({
    selector: 'app-list-academic-administration',
    templateUrl: './list-academic-administration.component.html',
    styleUrls: ['./list-academic-administration.component.scss'],
    animations: [routerTransition()]
})
export class ListAcademicAdministrationComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    loading: boolean;

    activities: AcademicAdministrationActivity[];
    selectedActivity: AcademicAdministrationActivity;
    titles = this.academicAdministrationService.titles;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private academicAdministrationService: AcademicAdministrationService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            {
                label: 'academic-administration',
                url: 'activity/academic-administration'
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
        this.academicAdministrationService
            .academicAdministrationActivities()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.loading = result.loading;
                    this.activities =
                        result.data.academicAdministrationActivities;
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }

    onAdd() {
        try {
            this.router.navigate(['../activity/academic-administration/add']);
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
                'activity/academic-administration/edit',
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
                'activity/academic-administration/view',
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
    onReject() {}
    onConfirm(event) {}
    onRowSelect(event) {}
}
