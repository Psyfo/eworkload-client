import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AcademicAdministrationActivity } from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { UserService } from '../../../admin/user/user.service';
import { AcademicAdministrationService } from '../academic-administration.service';

@Component({
    selector: 'app-view-academic-administration',
    templateUrl: './view-academic-administration.component.html',
    styleUrls: ['./view-academic-administration.component.scss'],
    animations: [routerTransition()]
})
export class ViewAcademicAdministrationComponent implements OnInit {
    breadcrumbs: MenuItem[];

    userId = this.userService.currentUserIdStatic();
    activity: AcademicAdministrationActivity;

    private unsubscribe = new Subject();
    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private academicAdministrationService: AcademicAdministrationService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'academic-administration' },
            { label: 'add' }
        ];

        this.getActivity();
    }

    getActivity() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const activityId = result.get('activityId');
                    this.academicAdministrationService
                        .academicAdministrationActivity(activityId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                this.activity =
                                    result.data.academicAdministrationActivity;
                            },
                            err => {
                                console.error(err);
                            }
                        );
                },
                err => {
                    console.error(err);
                }
            );
    }

    onBack(event) {
        this.router.navigate(['activity/academic-administration']);
    }
    onEdit(event) {
        this.router.navigate(
            ['activity/academic-administration/edit', this.activity.activityId],
            {
                queryParams: {
                    activityId: this.activity.activityId
                }
            }
        );
    }
}
