import { routerTransition } from 'src/app/router.animations';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import {
    PersonnelDevelopmentActivityInput,
    PersonnelDevelopmentActivity
} from 'src/app/shared/generated';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/shared/modules';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonnelDevelopmentService } from '../personnel-development.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-edit-personnel-development',
    templateUrl: './edit-personnel-development.component.html',
    styleUrls: ['./edit-personnel-development.component.scss'],
    animations: [routerTransition()]
})
export class EditPersonnelDevelopmentComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { read: NgForm }) form: NgForm;

    activityModel: PersonnelDevelopmentActivity;
    activityInput: PersonnelDevelopmentActivityInput;
    selectedDate: Date[];
    isSubmitting: boolean;

    private unsubscribe = new Subject();
    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private personnelDevelopmentService: PersonnelDevelopmentService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'personnel-development' },
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
                    this.personnelDevelopmentService
                        .personnelDevelopmentActivity(activityId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                this.activityModel =
                                    result.data.personnelDevelopmentActivity;
                                this.selectedDate = this.activityModel.date.map(
                                    dateString => {
                                        return new Date(dateString);
                                    }
                                );
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
    onSubmit() {
        this.isSubmitting = true;

        this.activityInput = {
            activityId: this.activityModel.activityId,
            title: this.activityModel.title,
            date: this.selectedDate,
            duration: this.activityModel.duration
        };

        this.personnelDevelopmentService
            .editPersonnelDevelopmentActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.isSubmitting = false;
                    this.alertService.successToast('Activity added');
                    this.router.navigate(['activity/personnel-development']);
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onBack(event) {
        this.router.navigate(['activity/personnel-development']);
    }
    onReset(event) {
        this.getActivity();
    }
}
