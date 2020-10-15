import { DisciplineService } from 'src/app/layout/admin/discipline/discipline.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User, Discipline, UserInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  animations: [routerTransition()]
})
export class ListUserComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: boolean;

  selectedUser: User;
  users: User[];
  disciplines: Discipline[];
  nationalities = this.userService.nationalities;
  genders = this.userService.genders;
  workFocuses = this.userService.workFocuses;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private userService: UserService,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getDisciplines();
    this.cols = [
      { field: 'userId', header: 'User ID' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'firstName', header: 'First Name' },
      { field: 'email', header: 'Email' },
      { field: 'workFocusName', header: 'Work Focus' },
      { field: 'disciplineId', header: 'Discipline' },
      { field: 'gender', header: 'Gender' }
    ];
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getUsers() {
    this.loading = true;
    this.userService
      .getUsers()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result) => {
        this.loading = result.loading;
        this.users = result.data.users;
        this.breadcrumbs = [
          { label: 'admin' },
          { label: 'user', url: 'admin/user' }
        ];
        this.menuItems = [
          {
            label: 'View',
            icon: 'pi pi-search',
            command: (event) => this.onContextView(event)
          },
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            command: (event) => this.onContextEdit(event)
          },
          {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: (event) => this.onContextDelete(event)
          }
        ];
      });
  }
  getDisciplines() {
    this.disciplineService
      .disciplines()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.disciplines = result.data.disciplines;
        },
        (error) => {
          this.alertService.errorToast(error, 'errorToast');
        }
      );
  }

  onAdd() {
    this.router.navigate(['admin/user/add']);
  }
  onContextView(event) {
    this.alertService.infoToast(`User: ${this.selectedUser.userId} selected`);

    this.router.navigate(['admin/user/view', this.selectedUser.userId], {
      queryParams: {
        userId: this.selectedUser.userId
      }
    });
  }
  onContextEdit(event) {
    this.alertService.infoToast(`User: ${this.selectedUser.userId} selected`);

    this.router.navigate(['admin/user/edit', this.selectedUser.userId], {
      queryParams: {
        userId: this.selectedUser.userId
      }
    });
  }
  onContextDelete(event) {
    this.alertService.confirm('userDelete');
  }
  onReject() {
    this.alertService.clear();
  }
  onConfirm() {
    this.alertService.clear();
    const userInput: UserInput = {
      userId: this.selectedUser.userId
    };
    this.userService
      .deleteUser(userInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {},
        (err) => {
          this.alertService.errorToast(err, 'errorToast');
        }
      );
    this.alertService.successToast('User Deleted');
  }
  onRowSelect(event) {
    const userData: User = event.data;
    console.log(userData);

    this.alertService.infoToast(`User: ${this.selectedUser.userId} selected`);
    this.router.navigate(['admin/user/view', this.selectedUser.userId], {
      queryParams: {
        userId: this.selectedUser.userId
      }
    });
  }
}
