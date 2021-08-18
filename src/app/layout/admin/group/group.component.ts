import { UserService } from 'src/app/layout/admin/user/user.service';
import { ModuleService } from './../module/module.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';
import { IModule } from '../module/module.interface';

import { IGroup } from './group.interface';
import { GroupService } from './group.service';
import { IUser } from '../user/user.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  animations: [routerTransition()]
})
export class GroupComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  groupDialog: boolean;
  groups: IGroup[];
  group: IGroup;
  modules: IModule[];
  module: IModule;
  moduleId: string;
  selectedGroups: IGroup[];
  users: IUser[];
  user: IUser;
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private groupService: GroupService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private moduleService: ModuleService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'group',
        url: 'admin/group'
      }
    ];
    this.getGroups();
    this.getModules();
    this.getUsers();
    this.timer = setInterval(() => {
      this.getGroups();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Group destroyed');
  }

  getGroups() {
    this.groupService.all().subscribe((data) => {
      this.groups = data;
    });
  }
  getModules() {
    this.moduleService.all().subscribe((data) => {
      this.modules = data;
    });
  }

  getUsers() {
    this.userService.all().subscribe((data) => (this.users = data));
  }

  openNew() {
    this.group = {};
    this.submitted = false;
    this.groupDialog = true;
  }

  deleteSelectedGroups() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.groups = this.groups.filter(
          (val) => !this.selectedGroups.includes(val)
        );
        this.selectedGroups = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Groups deleted',
          life: 3000
        });
      }
    });
  }

  editGroup(group: IGroup) {
    this.group = { ...group };
    this.groupDialog = true;
  }

  deleteGroup(group: IGroup) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + group.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.groupService.delete(group._id).subscribe((data) => {
          this.groups = [...this.groups];
        });

        this.group = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Group Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.groupDialog = false;
    this.submitted = false;
  }

  saveGroup() {
    this.submitted = true;

    if (this.group.name.trim()) {
      if (this.group._id) {
        this.groupService
          .update(this.group)
          .subscribe((data) => (this.group = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'group Updated',
          life: 3000
        });
      } else {
        this.groupService.create(this.group).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'group Created',
          life: 3000
        });
      }

      //this.groups = [...this.groups];
      this.groupDialog = false;
      this.group = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i]._id === _id) {
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
