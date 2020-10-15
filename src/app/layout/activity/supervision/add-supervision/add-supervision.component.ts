import { SelectItem } from 'primeng/api/selectitem';
import { MenuItem } from 'primeng/api/menuitem';
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
  @ViewChild('f') form: any;

  userId = this.userService.currentUserIdStatic();
  dutyId = '11';
  year = new Date().getFullYear();
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
      .studentsUnassigned(this.userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.students = result.data.studentsUnassigned.map((student) => {
            let modStudent: any = student;
            modStudent.label = `${student.studentId} - ${student.firstName} ${student.lastName}`;
            return modStudent;
          });
        },
        (err) => {
          this.alertService.errorToast(err, 'errorToast');
        }
      );
  }

  onSubmit() {
    this.isSubmitting = true;
    this.activityInput = { userId: this.userId, dutyId: this.dutyId };
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
        (result) => {
          this.isSubmitting = false;
          this.alertService.successToast('Supervision activity added');
          this.router.navigate(['activity/supervision']);
        },
        (err) => {
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
