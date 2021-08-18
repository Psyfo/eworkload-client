import { StudentService } from './../../admin/student/student.service';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';

import { routerTransition } from '../../../router.animations';
import { IUser } from '../../admin/user/user.interface';
import { ISupervisionActivity } from './supervision.interface';
import { SupervisionService } from './supervision.service';
import { IStudent } from '../../admin/student/student.interface';

@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.component.html',
  styleUrls: ['./supervision.component.scss'],
  animations: [routerTransition()]
})
export class SupervisionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  supervisionDialog: boolean;
  supervisionActivities: ISupervisionActivity[];
  supervisionActivity: ISupervisionActivity;
  selectedSupervisionActivities: ISupervisionActivity[];

  users: IUser[];
  selectedUser: IUser;
  students: IStudent[];
  student: IStudent;
  submitted: boolean;
  statuses: any;
  types: string[];

  unsubscribe = new Subject();
  timer;

  constructor(
    private supervisionService: SupervisionService,
    private userService: UserService,
    private studentService: StudentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'formal-instruction',
        url: 'admin/formal-instruction'
      }
    ];
    this.types = ['Diploma', 'Bachelor', 'Masters', 'Doctorate'];
    this.getSupervisions();
    this.getUsers();
    this.getStudents();
    this.timer = setInterval(() => {
      this.getSupervisions();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Supervision destroyed');
  }

  getSupervisions() {
    this.supervisionService.all().subscribe((data) => {
      this.supervisionActivities = data;
    });
  }

  getUsers() {
    this.userService.all().subscribe((data) => (this.users = data));
  }

  getStudents() {
    this.studentService.all().subscribe((data) => (this.students = data));
  }

  openNew() {
    this.supervisionActivity = {};
    this.submitted = false;
    this.supervisionDialog = true;
  }

  deleteSelectedSupervisions() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.supervisionActivities = this.supervisionActivities.filter(
          (val) => !this.selectedSupervisionActivities.includes(val)
        );
        this.selectedSupervisionActivities = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Supervisions deleted',
          life: 3000
        });
      }
    });
  }

  editSupervision(supervisionActivity: ISupervisionActivity) {
    this.supervisionActivity = { ...supervisionActivity };
    this.supervisionDialog = true;
  }

  deleteSupervision(supervisionActivity: ISupervisionActivity) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' + supervisionActivity._id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.supervisionService
          .delete(supervisionActivity._id)
          .subscribe((data) => {
            this.supervisionActivities = [...this.supervisionActivities];
          });

        this.supervisionActivity = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Activity Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.supervisionDialog = false;
    this.submitted = false;
  }

  saveSupervision() {
    this.submitted = true;
    this.supervisionActivity.split = 100;
    this.supervisionActivity.year = "2021"

    if (this.supervisionActivity.userId) {
      console.log('Save hit');

      if (this.supervisionActivity._id) {
        this.supervisionService
          .update(this.supervisionActivity)
          .subscribe((data) => (this.supervisionActivity = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Supervision Activity Updated',
          life: 3000
        });
      } else {
        this.supervisionActivity.dutyId = '11';

        this.supervisionService.create(this.supervisionActivity).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Supervision Activity Created',
          life: 3000
        });
      }

      //this.supervisionActivities = [...this.supervisionActivities];
      this.supervisionDialog = false;
      this.supervisionActivity = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.supervisionActivities.length; i++) {
      if (this.supervisionActivities[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }
}
