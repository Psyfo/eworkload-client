import { SelectItem } from 'primeng/components/common/selectitem';
import { AlertService } from 'src/app/shared/modules';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';
import { Discipline, User } from 'src/app/shared/generated';
import { UserService } from 'src/app/shared/services';

import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-staff-list',
    templateUrl: './staff-list.component.html',
    styleUrls: ['./staff-list.component.scss'],
    animations: [routerTransition()]
})
export class StaffListComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    loading: boolean;

    selectedUser: User;
    users: User[];
    nationalities = this.userService.nationalities;
    genders = this.userService.genders;
    workFocuses = this.userService.workFocuses;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.getUsers();
        this.cols = [
            { field: 'userId', header: 'User ID' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'firstName', header: 'First Name' },
            { field: 'email', header: 'Email' },
            { field: 'workFocusName', header: 'Work Focus' },
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
            .subscribe(result => {
                this.loading = result.loading;
                this.users = result.data.users;
                this.breadcrumbs = [
                    { label: 'admin' },
                    { label: 'staff', url: 'admin/staff' }
                ];
                this.menuItems = [
                    {
                        label: 'View',
                        icon: 'pi pi-search',
                        command: event => this.onContextView(event)
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-pencil',
                        command: event => this.onContextEdit(event)
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-trash',
                        command: event => this.onContextDelete(event)
                    }
                ];
            });
    }

    onAdd() {
        this.router.navigate(['admin/staff/add']);
    }
    onContextView(event) {
        this.alertService.infoToast(
            `User: ${this.selectedUser.userId} selected`
        );

        this.router.navigate(['admin/staff/view', this.selectedUser.userId], {
            queryParams: {
                userId: this.selectedUser.userId
            }
        });
    }
    onContextEdit(event) {
        this.alertService.infoToast(
            `User: ${this.selectedUser.userId} selected`
        );

        this.router.navigate(['admin/staff/edit', this.selectedUser.userId], {
            queryParams: {
                userId: this.selectedUser.userId
            }
        });
    }
    onContextDelete(event) {
        this.alertService.infoToast('Delete service coming soon');
    }
    onRowSelect(event) {
        const userData: User = event.data;
        console.log(userData);

        this.alertService.infoToast(
            `User: ${this.selectedUser.userId} selected`
        );
        this.router.navigate(['admin/staff/view', this.selectedUser.userId], {
            queryParams: {
                userId: this.selectedUser.userId
            }
        });
    }
}
