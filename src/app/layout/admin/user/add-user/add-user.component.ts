import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Position, UserInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PositionService } from '../../position/position.service';
import { UserService } from '../user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
    animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {
    breadcrumbs: MenuItem[];

    user: UserInput = {};
    positions: Position[];
    selectedPosition: Position;

    private unsubscribe = new Subject();

    userAddForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private positionService: PositionService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.userAddForm = this.fb.group({
            userId: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            position: ['', Validators.required],
            email: [
                '',
                Validators.compose([Validators.required, Validators.email])
            ]
        });

        this.getPositions();
    }

    // Getters
    get userId() {
        return this.userAddForm.get('userId');
    }
    get password() {
        return this.userAddForm.get('password');
    }
    get firstName() {
        return this.userAddForm.get('firstName');
    }
    get lastName() {
        return this.userAddForm.get('lastName');
    }
    get email() {
        return this.userAddForm.get('email');
    }
    get position() {
        return this.userAddForm.get('position');
    }
    get formVal() {
        return this.userAddForm.getRawValue();
    }

    getPositions() {
        this.positionService
            .positions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions;
            });
    }

    onAdd() {
        this.user.userId = this.userId.value;
        this.user.firstName = this.firstName.value;
        this.user.lastName = this.lastName.value;
        this.user.email = this.email.value;
        this.selectedPosition = this.position.value;
        this.user.positionId = this.selectedPosition.positionId;

        this.userService
            .addUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                try {
                    const userId = result.data.addUser.userId;
                    this.alertService.successToast(`New User ${userId} added`);
                    this.router.navigate(['admin/user/view', userId], {
                        queryParams: {
                            userId: userId
                        }
                    });
                } catch (error) {
                    console.log(error);

                    this.alertService.errorToast(error, 'errorToast', 0, true);
                }
            });
        this.router.navigate(['admin/user']);
    }

    onBack(event) {
        this.router.navigate(['admin/user']);
    }

    onReset(event) {
        this.userAddForm.reset();
    }
}
