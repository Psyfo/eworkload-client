import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Department, DepartmentInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DepartmentService } from '../department.service';

@Component({
    selector: 'app-department-view',
    templateUrl: './department-view.component.html',
    styleUrls: ['./department-view.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentViewComponent implements OnInit {
    breadcrumbs: MenuItem[];

    department: Department;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'department', url: 'admin/department' },
            { label: 'add', url: 'admin/department/add' }
        ];
        this.getDepartment();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    getDepartment() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const departmentId = result.get('departmentId');

                    this.departmentService
                        .department(departmentId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                this.department = result.data.department;
                            },
                            err => {
                                console.error(err);
                            }
                        );
                },
                err => {
                    console.error(err);
                }
            );
    }
    onEdit(event) {
        this.router.navigate(
            ['admin/department/edit', this.department.departmentId],
            {
                queryParams: {
                    departmentId: this.department.departmentId
                }
            }
        );
    }
    onBack(event) {
        this.router.navigate(['admin/department']);
    }
}
