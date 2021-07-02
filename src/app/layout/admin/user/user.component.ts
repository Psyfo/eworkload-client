import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

import { IUser } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  breadcrumbs: MenuItem[];

  userDialog: boolean;
  users: IUser[];
  user: IUser;
  selectedUsers: IUser[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private userService: UserService,
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
      console.log(JSON.stringify(this.users));
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

    if (this.user._id.trim()) {
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
}
