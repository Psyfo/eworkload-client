import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { PersonnelDevelopmentService } from './../personnel-development.service';
import { Router } from '@angular/router';
import { AlertService } from './../../../../shared/modules/alert/alert.service';
import {
    PersonnelDevelopmentActivity,
    PersonnelDevelopmentActivityInput
} from './../../../../shared/generated/output';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
    selector: 'app-add-personnel-development',
    templateUrl: './add-personnel-development.component.html',
    styleUrls: ['./add-personnel-development.component.scss'],
    animations: [routerTransition()]
})
export class AddPersonnelDevelopmentComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    userId = this.userService.currentUserIdStatic();
    dutyId = '48';

    activityInput: PersonnelDevelopmentActivityInput = {
        userId: this.userId,
        dutyId: this.dutyId
    };
    isSubmitting: boolean;

    private unsubscribe = new Subject();
    constructor(
        private alertService: AlertService,
        private router: Router,
        private personnelDevelopmentService: PersonnelDevelopmentService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'personnel-development' },
            { label: 'add' }
        ];
    }
    onSubmit() {
        this.isSubmitting = true;
        this.personnelDevelopmentService
            .addPersonnelDevelopmentActivity(this.activityInput)
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
        this.form.reset();
        this.ngOnInit();
    }
}
