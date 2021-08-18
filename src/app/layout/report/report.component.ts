import { map } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { Table } from 'primeng/table';
import { IUser } from '../admin/user/user.interface';
import { FormalInstructionService } from '../activity/formal-instruction/formal-instruction.service';
import { SupervisionService } from '../activity/supervision/supervision.service';
import { ResearchService } from '../activity/research/research.service';
import { IFormalInstructionActivity } from '../activity/formal-instruction/formal-instruction.interface';
import { ISupervisionActivity } from '../activity/supervision/supervision.interface';
import { IResearchActivity } from '../activity/research/research.interface';

@Component({
  selector: 'app-user',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: [routerTransition()]
})
export class ReportComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  userDialog: boolean;
  users: IUser[];
  user: IUser;
  selectedUsers: IUser[];
  formalInstructionActivities: IFormalInstructionActivity[];
  supervisionActivities: ISupervisionActivity[];
  researchActivities: IResearchActivity[];
  workload: any = [];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private userService: UserService,
    private formalInstructionService: FormalInstructionService,
    private supervisionService: SupervisionService,
    private researchService: ResearchService,
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
    this.getFormalInstructionActivities();
    this.getSupervisionActivities();
    this.getResearchActivities();
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
      this.users.map(user=>{
          this.workload.push();
      })
      console.log(JSON.stringify(this.users));
    });
  }

  getFormalInstructionActivities() {
    this.formalInstructionService.all().subscribe((data) => {
      this.formalInstructionActivities = data;
    });
  }

  getSupervisionActivities() {
    this.supervisionService.all().subscribe((data) => {
      this.researchActivities = data;
    });
  }

  getResearchActivities() {
    this.researchService.all().subscribe((data) => {
      this.researchActivities = data;
    });
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
          detail: 'user Updated',
          life: 3000
        });
      } else {
        this.userService.create(this.user).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'user Created',
          life: 3000
        });
      }

      //this.users = [...this.users];
      this.userDialog = false;
      this.user = {};
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

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }
}
