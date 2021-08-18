import { WorkFocusService } from './../work-focus/work-focus.service';
import { IWorkFocus } from './../work-focus/work-focus.interface';
import { IPosition } from './../position/position.interface';
import { PositionService } from './../position/position.service';
import { DisciplineService } from './../discipline/discipline.service';
import { IDepartment } from './../department/department.interface';
import { DepartmentService } from './../department/department.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { IUser } from './user.interface';
import { UserService } from './user.service';
import { Table } from 'primeng/table';
import { IDiscipline } from '../discipline/discipline.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  userDialog: boolean;
  users: IUser[];
  user: IUser;
  selectedUsers: IUser[];
  departments: IDepartment[];
  department: IDepartment;
  disicplines: IDiscipline[];
  discipline: IDiscipline;
  selectedDisciplines: IDiscipline[];
  positions: IPosition[];
  position: IPosition;
  workFocuses: IWorkFocus[];
  workFocus: IWorkFocus;
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private userService: UserService,
    private departmentService: DepartmentService,
    private disciplineService: DisciplineService,
    private positionService: PositionService,
    private workFocusService: WorkFocusService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'user',
        url: 'admin/user'
      }
    ];
    this.getUsers();
    this.getDepartments();
    this.getDisciplines();
    this.getPositions();
    this.getWorkFocuses();
    this.timer = setInterval(() => {
      this.getUsers();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('User destroyed');
  }

  getUsers() {
    this.userService.all().subscribe((data) => {
      this.users = data;
    });
  }

  getDepartments() {
    this.departmentService.all().subscribe((data) => (this.departments = data));
  }

  getDisciplines() {
    this.disciplineService.all().subscribe((data) => (this.disicplines = data));
  }

  getPositions() {
    this.positionService.all().subscribe((data) => (this.positions = data));
  }

  getWorkFocuses() {
    this.workFocusService.all().subscribe((data) => (this.workFocuses = data));
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(
          (val) => !this.selectedUsers.includes(val)
        );
        this.selectedUsers = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Users deleted',
          life: 3000
        });
      }
    });
  }

  editUser(user: IUser) {
    this.user = { ...user };
    this.userDialog = true;
  }

  deleteUser(user: IUser) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.userId + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.delete(user._id).subscribe((data) => {
          this.users = [...this.users];
        });

        this.user = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;

    if (this.user.userId.trim()) {
      if (this.user._id) {
        this.userService
          .update(this.user)
          .subscribe((data) => (this.user = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Updated',
          life: 3000
        });
      } else {
        this.userService
          .create(this.user)
          .subscribe((data) => console.log(data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Created',
          life: 3000
        });
      }

      //this.users = [...this.users];
      this.userDialog = false;
      this.user = {};
      //this.selectedDepartment = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
