import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
  Department,
  DepartmentInput,
  Faculty,
  User
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FacultyService } from '../../faculty/faculty.service';
import { DepartmentService } from '../department.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss'],
  animations: [routerTransition()]
})
export class DepartmentEditComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f') form: any;

  faculties: Faculty[];
  selectedFaculty: Faculty;
  departmentModel: Department;
  departmentInput: DepartmentInput = {};
  users: User[];
  selectedHod: User;
  isSubmitting: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'department', url: 'admin/department' },
      { label: 'edit' }
    ];
    this.getFaculties();
    this.getUsers();
    this.getDepartment();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getDepartment() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          const departmentId = result.get('departmentId');
          this.departmentService
            .department(departmentId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
              this.departmentModel = result.data.department;
              this.selectedFaculty = this.faculties.find(
                faculty => faculty.facultyId === this.departmentModel.facultyId
              );

              if (this.departmentModel.hodId) {
                this.selectedHod = this.users.find(
                  user => user.userId === this.departmentModel.hodId
                );
              }
            });
        },
        err => {
          console.error(err);
        }
      );
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
          console.error(err);
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
          console.error(err);
        }
      );
  }

  onSubmit() {
    this.isSubmitting = true;
    this.departmentInput = {
      departmentId: this.departmentModel.departmentId,
      name: this.departmentModel.name,
      facultyId: this.selectedFaculty.facultyId
    };
    if (this.selectedHod) {
      this.departmentInput.hodId = this.selectedHod.userId;
    }
    this.departmentService
      .editDepartment(this.departmentInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.alertService.successToast('Department edited');
          this.router.navigate(['admin/department']);
        },
        err => {
          console.error(err);
        }
      );
  }
  onBack(event) {
    this.router.navigate(['../admin/department']);
  }
  onReset(event) {
    this.getDepartment();
  }
}
