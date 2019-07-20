import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Position, UserInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { PositionService, UserService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-staff-add',
    templateUrl: './staff-add.component.html',
    styleUrls: ['./staff-add.component.scss'],
    animations: [routerTransition()]
})
export class StaffAddComponent implements OnInit {
    user: UserInput;
    positions: Position[];

    private unsubscribe = new Subject();

    staffAddForm: FormGroup;

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
        this.staffAddForm = this.fb.group({
            userId: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            positionId: ['', Validators.required],
            email: [
                '',
                Validators.compose([Validators.required, Validators.email])
            ]
        });

        this.getPositions();
    }

    // Getters
    get userId() {
        return this.staffAddForm.get('userId');
    }
    get password() {
        return this.staffAddForm.get('password');
    }
    get firstName() {
        return this.staffAddForm.get('firstName');
    }
    get lastName() {
        return this.staffAddForm.get('lastName');
    }
    get email() {
        return this.staffAddForm.get('email');
    }
    get positionId() {
        return this.staffAddForm.get('positionId');
    }
    get formVal() {
        return this.staffAddForm.getRawValue();
    }

    getPositions() {
        this.positionService
            .getPositions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions;
            });
    }

    async onAdd() {
        this.user = this.formVal;
        this.userService
            .addUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log(result.data.addUser);
                this.alertService.success('Added new staff member');
            });
        this.router.navigate(['admin/staff']);
    }

    onBack() {
        this.router.navigate(['admin/staff']);
    }

    onReset() {
        this.staffAddForm.reset();
    }
}
