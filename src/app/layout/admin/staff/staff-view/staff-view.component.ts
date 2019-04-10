import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { AlertService } from './../../../../shared/services/alert.service';

@Component({
    selector: "app-staff-view",
    templateUrl: "./staff-view.component.html",
    styleUrls: ["./staff-view.component.scss"],
    animations: [routerTransition()]
})
export class StaffViewComponent implements OnInit {
    staffId: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        // Get ID from route
        this.staffId = this.activatedRoute.snapshot.paramMap.get("id");

    }

    // Methods

    public getCurrentDepartment(dId: string) {

    }

    public getCurrentPosition(pId: string) {

    }

    public getDepartments(): void {

    }

    public getPositions(): void {
        
    }

    public onEdit() {
        this.router.navigate(["staff/edit", this.staffId]);
    }

    public onBack(): void {
        this.router.navigate(["../staff"]);
    }

    public onDelete(): void {
        this.alertService.sendMessage("Delete service coming soon", "info");
    }
}
