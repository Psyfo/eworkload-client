import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/layout/admin/student/student.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
    Student,
    SupervisionActivityInput
} from '../../../../shared/generated/output';
import { SupervisionService } from '../supervision.service';

@Component({
    selector: 'app-add-supervision',
    templateUrl: './add-supervision.component.html',
    styleUrls: ['./add-supervision.component.scss'],
    animations: [routerTransition()]
})
export class AddSupervisionComponent implements OnInit {
    breadcrumbs: MenuItem[];

    supervisionActivity: SupervisionActivityInput = {};
    supervisionRoles = this.supervisionService.supervisionRoles;
    splits = this.supervisionService.splits;
    students: Student[];

    addSupervisionForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private supervisionService: SupervisionService,
        private userService: UserService,
        private studentService: StudentService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'supervision' },
            { label: 'add' }
        ];
        this.getStudents();
        this.buildForm();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    buildForm() {
        this.addSupervisionForm = this.fb.group({
            supervisionRole: ['', [Validators.required]],
            split: ['', [Validators.required]],
            student: ['', [Validators.required]]
        });
    }
    get supervisionRole() {
        return this.addSupervisionForm.get('supervisionRole');
    }
    get split() {
        return this.addSupervisionForm.get('split');
    }
    get student() {
        return this.addSupervisionForm.get('student');
    }
    get formVal() {
        return this.addSupervisionForm.getRawValue();
    }
    getStudents() {
        this.studentService
            .students()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.students = result.data.students;
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }

    onAdd() {
        this.supervisionActivity.userId = this.userService.currentUserIdStatic();
        this.supervisionActivity.dutyId = '20';
        const supervisionRole = this.supervisionRole.value;
        this.supervisionActivity.supervisionRole = supervisionRole.value;
        const split = this.split.value;
        this.supervisionActivity.split = split.value;
        const student = this.student.value;
        this.supervisionActivity.studentId = student.studentId;
        console.log(this.supervisionActivity);

        this.supervisionService
            .addSupervisionActivity(this.supervisionActivity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {},
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
        this.alertService.successToast('Activity added');
        this.router.navigate(['activity/supervision']);
    }
    onBack(event) {
        this.router.navigate(['activity/supervision']);
    }
    onReset(event) {
        this.addSupervisionForm.reset();
        this.ngOnInit();
    }
}
