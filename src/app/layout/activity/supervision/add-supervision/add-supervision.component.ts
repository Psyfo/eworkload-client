import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QualificationService } from 'src/app/layout/admin/qualification/qualification.service';
import { StudentService } from 'src/app/layout/admin/student/student.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
    Qualification,
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
    @ViewChild('f', { static: false }) form: any;

    userId = this.userService.currentUserIdStatic();
    dutyId = '11';
    activityInput: SupervisionActivityInput = {};
    supervisionRoles = this.supervisionService.supervisionRoles;
    selectedSupervisionRole: any = {};
    splits = this.supervisionService.splits;
    selectedSplit: any = {};
    students: Student[] = [];
    selectedStudent: Student = {};

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private supervisionService: SupervisionService,
        private studentService: StudentService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'supervision' },
            { label: 'add' }
        ];
        this.getStudents();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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

    onSubmit() {
        this.activityInput.userId = this.userId;
        this.activityInput.dutyId = this.dutyId;
        this.activityInput.supervisionRole = this.selectedSupervisionRole.value;
        if (this.selectedSupervisionRole.value === 'Supervisor') {
            this.activityInput.split = 100;
        } else {
            this.activityInput.split = this.selectedSplit.value;
        }
        this.activityInput.studentId = this.selectedStudent.studentId;

        this.supervisionService
            .addSupervisionActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.alertService.successToast(
                        'Supervision activity added'
                    );
                    this.router.navigate(['activity/supervision']);
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                    console.warn(err);
                }
            );
    }
    onBack(event) {
        this.router.navigate(['activity/supervision']);
    }
    onReset(event) {
        this.form.reset();
    }
    onAddStudent(event) {
        this.router.navigate(['activity/supervision/add-student']);
    }
}
