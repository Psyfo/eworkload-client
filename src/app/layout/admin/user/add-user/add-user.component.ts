import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Position, UserInput, Department } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PositionService } from '../../position/position.service';
import { UserService } from '../user.service';
import { DepartmentService } from '../../department/department.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
    animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    userInput: UserInput = {};
    positions: Position[];
    selectedPosition: Position;
    departments: Department[];
    selectedDepartment: Department;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private departmentService: DepartmentService,
        private userService: UserService,
        private positionService: PositionService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'user', url: 'admin/user' },
            { label: 'add', url: 'admin/user/add' }
        ];
        this.getPositions();
        this.getDepartments();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getPositions() {
        this.positionService
            .positions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions;
            });
    }
    getDepartments() {
        this.departmentService
            .departments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.departments = result.data.departments;
            });
    }

    onSubmit() {
        this.userInput.departmentId = this.selectedDepartment.departmentId;
        this.userInput.positionId = this.selectedPosition.positionId;

        this.userService
            .addUser(this.userInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    console.log('User added:', result.data.addUser);
                    this.alertService.successToast('User added');
                    this.router.navigate(['admin/user']);
                },
                err => {
                    console.warn(err);
                }
            );
    }

    onBack(event) {
        this.router.navigate(['admin/user']);
    }

    onReset(event) {
        this.form.reset();
    }
}
