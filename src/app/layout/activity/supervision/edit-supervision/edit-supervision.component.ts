import { routerTransition } from 'src/app/router.animations';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/layout/admin/student/student.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import {
    Student,
    SupervisionActivityInput,
    SupervisionActivity
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SupervisionService } from '../supervision.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-edit-supervision',
    templateUrl: './edit-supervision.component.html',
    styleUrls: ['./edit-supervision.component.scss'],
    animations: [routerTransition()]
})
export class EditSupervisionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { read: NgForm }) form: NgForm;

    userId = this.userService.currentUserIdStatic();
    dutyId = '11';
    year = new Date().getFullYear();
    activityModel: SupervisionActivity;
    activityInput: SupervisionActivityInput = {};
    supervisionRoles = this.supervisionService.supervisionRoles;
    selectedSupervisionRole: any = {};
    splits = this.supervisionService.splits;
    selectedSplit: any = {};
    students: Student[] = [];
    selectedStudent: Student = {};
    isSubmitting: boolean;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRouter: ActivatedRoute,
        private supervisionService: SupervisionService,
        private studentService: StudentService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'supervision' },
            { label: 'edit' }
        ];
        this.getActivity();
        this.getStudents();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getActivity() {
        this.activatedRouter.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const activityId = result.get('activityId');
                    this.supervisionService
                        .supervisionActivity(activityId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                // activity
                                this.activityModel =
                                    result.data.supervisionActivity;
                                //role
                                this.selectedSupervisionRole = this.supervisionRoles.find(
                                    supervisionRole =>
                                        supervisionRole.value ===
                                        this.activityModel.supervisionRole
                                );
                                // split
                                if (
                                    this.activityModel.supervisionRole !==
                                    'Supervisor'
                                ) {
                                    this.selectedSplit = this.splits.find(
                                        split =>
                                            split.value ===
                                            this.activityModel.split
                                    );
                                }
                                // student
                                this.selectedStudent = this.activityModel.student;
                            },
                            err => {
                                this.alertService.errorToast(err);
                                console.warn(err);
                            }
                        );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
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
        this.isSubmitting = true;
        this.activityInput = {
            activityId: this.activityModel.activityId,
            userId: this.activityModel.userId,
            dutyId: this.activityModel.dutyId,
            supervisionRole: this.selectedSupervisionRole.value,
            studentId: this.selectedStudent.studentId
        };
        if (this.selectedSupervisionRole.value === 'Supervisor') {
            this.activityInput.split = 100;
        } else {
            this.activityInput.split = this.selectedSplit.value;
        }

        this.supervisionService
            .editSupervisionActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.isSubmitting = false;
                    this.alertService.successToast(
                        'Supervision activity edited'
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
        this.getActivity();
        this.form.form.markAsPristine();
    }
}
