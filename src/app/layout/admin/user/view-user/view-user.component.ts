import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
    selector: 'app-view-user',
    templateUrl: './view-user.component.html',
    styleUrls: ['./view-user.component.scss'],
    animations: [routerTransition()]
})
export class ViewUserComponent implements OnInit {
    breadcrumbs: MenuItem[];

    userId: string;
    user: User;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.userId = result.userId;

                this.getUser();
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    getUser() {
        this.userService
            .getUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = result.data.user;
                console.log(this.user);
                this.breadcrumbs = [
                    { label: 'admin' },
                    { label: 'user', url: 'admin/user' },
                    { label: 'view' },
                    { label: this.user.userId }
                ];
            });
    }

    onEdit(event) {
        this.router.navigate(['admin/user/edit', this.user.userId], {
            queryParams: { userId: this.user.userId }
        });
    }

    onBack(event) {
        this.router.navigate(['admin/user']);
    }
    showConfirm() {
        this.alertService.clear();
        this.alertService.confirm('userDelete');
    }
    onConfirm() {
        this.userService
            .deleteUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                try {
                    this.alertService.infoToast('Venue deleted');
                    this.router.navigate(['admin/user']);
                } catch (error) {
                    this.alertService.errorToast(error, 'errorToast');
                }
            });
    }
    onReject() {
        this.alertService.clear();
    }
}
