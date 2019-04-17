import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { AlertService } from './../../../../shared/services/alert.service';
import { User } from '../../../../shared/models';
import { UserGQL } from '../../../../shared/generated/output';

@Component({
    selector: "app-staff-view",
    templateUrl: "./staff-view.component.html",
    styleUrls: ["./staff-view.component.scss"],
    animations: [routerTransition()]
})
export class StaffViewComponent implements OnInit {
    userId: string;
    user: User;

    loading: boolean;
    errors: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private userGql: UserGQL
    ) {}

    ngOnInit() {
        // Get ID from route
        this.userId = this.activatedRoute.snapshot.paramMap.get("id");

        this.getUser();
    }

    // Methods
    getUser() {
        this.userGql.watch({userId: this.userId}).valueChanges.subscribe(result => {
                this.loading = result.loading;
                this.user = result.data.user as User;
                this.errors = result.errors;

                if(this.errors) {
                    console.log(this.errors);
                }
        });
    }

    public getCurrentDepartment(dId: string) {

    }

    public getCurrentPosition(pId: string) {

    }

    public getDepartments(): void {

    }

    public getPositions(): void {

    }

    public onEdit() {
        this.router.navigate(["staff/edit", this.userId]);
    }

    public onBack(): void {
        this.router.navigate(["../staff"]);
    }

    public onDelete(): void {
        this.alertService.sendMessage("Delete service coming soon", "info");
    }
}
