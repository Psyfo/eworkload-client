import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../../shared/services/user.service';
import { AlertService } from './../../../shared/services/alert.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    animations: [routerTransition()],
})
export class ChangePasswordComponent implements OnInit {
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
        this.buildForm();
    }

    buildForm() {
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
        });

        this.userService
            .currentUserId()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.userId = result;
            });
    }

    onEdit() {
        this.userService.changePassword(
            this.userId,
            this.oldPassword.value,
            this.newPassword.value
        );
    }
    onCancel() {
        this.router.navigate(['../profile']);
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
