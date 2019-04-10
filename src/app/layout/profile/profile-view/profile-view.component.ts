import { timeout } from 'rxjs/operators';
import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { UserGQL } from '../../../shared/generated/output';
import { User } from '../../../shared/models';
import { UserService } from '../../../shared/services/user.service';

@Component({
    selector: 'app-profile-view',
    moduleId: module.id,
    templateUrl: 'profile-view.component.html',
    styleUrls: ['profile-view.component.scss'],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    loading: boolean;
    errors: any;
    userId: string;
    user: User;

    // Pie
    public pieChartLabels: string[] = ['Research', 'Lecturing', 'Admin'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    constructor(
        private cdr:ChangeDetectorRef,
        private flashMessagesService: FlashMessagesService,
        private alertService: AlertService,
        private router: Router,
        private userGql: UserGQL,
        private userService: UserService
    ) {
        this.getData();
    }

    ngOnInit() {
        this.getData();
    }
    ngOnChanges(changes: SimpleChanges) {
        this.getData();
    }

    onEdit(): void {
        this.router.navigate(['profile/edit']);
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public getData() {
        // Get current user ID
        this.userService.currentUserId().subscribe(userId => {
            this.userId = userId;
            console.log(`Current user id: ${this.userId}`);

            // Fetch user data
            this.userGql
                .watch({ userId: this.userId })
                .valueChanges.subscribe(result => {
                    this.user = result.data.user as User;
                    this.loading = result.loading;
                    this.errors = result.errors;

                    if (this.errors) {
                        this.errors.forEach(error => {
                            this.flashMessagesService.show(
                                error.message,
                                'warn'
                            );
                        });
                        return;
                    }
                    console.log(this.user);
                });
        });


    }

    public getQualification(qId: string) {}

    public getDepartment(dId: string) {}

    public getPosition(pId: string) {}

    public clearMessage(): void {
        this.alertService.clearMessage();
    }
}
