import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User } from 'src/app/shared/generated';
import { UserService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-staff-view',
    templateUrl: './staff-view.component.html',
    styleUrls: ['./staff-view.component.scss'],
    animations: [routerTransition()]
})
export class StaffViewComponent implements OnInit {
    userId: string;
    user: User;

    private unsubscribe = new Subject();

    constructor(
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
                this.user = <User>(<unknown>result.data.user);
                console.log(this.user);
            });
    }

    public onEdit() {
        this.router.navigate(['admin/staff/edit', this.userId], {
            queryParams: {
                userId: this.userId
            }
        });
    }

    public onBack(): void {
        this.router.navigate(['../admin/staff']);
    }

    public onDelete(): void {}
}
