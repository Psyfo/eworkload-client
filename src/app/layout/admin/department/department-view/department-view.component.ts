import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { routerTransition } from '../../../../router.animations';
import { Department } from '../../../../shared/models';
import { AlertService, DepartmentService } from '../../../../shared/services';

@Component({
    selector: 'app-department-view',
    templateUrl: './department-view.component.html',
    styleUrls: ['./department-view.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentViewComponent implements OnInit {
    department: Department;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.getDepartment(result.departmentId);
            });
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods

    getDepartment(departmentId: string) {
        this.departmentService
            .getDepartment(departmentId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.department = <Department>(<unknown>result.data.department);
            });
    }

    onEdit() {
        console.log(this.department.departmentId);

        this.router.navigate(
            ['admin/department/edit', this.department.departmentId],
            {
                queryParams: {
                    departmentId: this.department.departmentId
                }
            }
        );
    }

    onCancel() {
        this.router.navigate(['../admin/department']);
    }

    onDelete() {
        this.alertService.sendMessage('Delete function coming soon!', 'info');
    }
}
