import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { DepartmentInput, Faculty, User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FacultyService } from '../../faculty/faculty.service';
import { UserService } from '../../user/user.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss'],
  animations: [routerTransition()]
})
export class DepartmentAddComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f', { static: false, read: NgForm }) form: NgForm;

  faculties: Faculty[];
  selectedFaculty: Faculty;
  departmentInput: DepartmentInput = {};
  users: User[];
  selectedHod: User;
  isSubmitting: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'department', url: 'admin/department' },
      { label: 'add' }
    ];

    this.getFaculties();
    this.getUsers();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getFaculties() {
    this.facultyService
      .getFaculties()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.faculties = result.data.faculties;
        },
        err => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }
  getUsers() {
    this.userService
      .getUsers()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.users = result.data.users.map(user => {
            const label = `${user.userId} - ${user.firstName} ${user.lastName}`;
            let hod: any = user;
            hod.label = label;
            return hod;
          });
        },
        err => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }

  onSubmit() {
    this.departmentInput.facultyId = this.selectedFaculty.facultyId;
    if (this.selectedHod) {
      this.departmentInput.hodId = this.selectedHod.userId;
    }
    this.departmentService
      .addDepartment(this.departmentInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.alertService.successToast(
            `Department ${this.departmentInput.departmentId} added`
          );
          this.router.navigate(['admin/department']);
        },
        err => {
          console.error(err);
        }
      );
  }
  onBack(event) {
    this.router.navigate(['admin/department']);
  }
  onReset(event) {
    this.form.reset();
  }
}
