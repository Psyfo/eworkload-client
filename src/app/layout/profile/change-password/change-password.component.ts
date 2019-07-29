import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../admin/user/user.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    animations: [routerTransition()]
})
export class ChangePasswordComponent implements OnInit {
    breadcrumbs: MenuItem[];
    passwordMatch: boolean = false;
    userId: string;

    private unsubscribe = new Subject();

    changePasswordForm: FormGroup;
    constructor(
        private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            {
                label: 'profile',
                url: 'profile/view'
            },
            {
                label: 'change-password',
                url: 'profile/change-password'
            }
        ];
        this.buildForm();
        this.comparePasswords();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]]
        });

        this.userService
            .currentUserId()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.userId = result;
            });
    }

    onEdit() {
        const userId = this.userService.currentUserIdStatic();
        console.log(this.oldPassword.value);
        console.log(this.newPassword.value);

        try {
            this.userService
                .changePassword(
                    userId,
                    this.oldPassword.value,
                    this.newPassword.value
                )
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(result => {
                    try {
                        this.alertService.successToast('Password changed');
                        this.router.navigate(['profile/view']);
                    } catch (error) {
                        this.alertService.errorToast(error, 'errorToast');
                    }
                });
        } catch (error) {
            this.alertService.errorToast(error, 'errorToast');
            return;
        }
    }
    onBack(event) {
        this.router.navigate(['../profile']);
    }
    onReset(event) {
        this.changePasswordForm.reset();
        this.ngOnInit();
    }

    comparePasswords() {
        this.confirmPassword.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                if (this.newPassword.value !== this.confirmPassword.value) {
                    this.passwordMatch = false;
                } else {
                    this.passwordMatch = true;
                }
            });
    }

    get oldPassword() {
        return this.changePasswordForm.get('oldPassword');
    }
    get newPassword() {
        return this.changePasswordForm.get('newPassword');
    }
    get confirmPassword() {
        return this.changePasswordForm.get('confirmPassword');
    }
    get formVal() {
        return this.changePasswordForm.value;
    }
}
