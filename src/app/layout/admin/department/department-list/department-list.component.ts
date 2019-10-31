import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Department, DepartmentInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, Renderer, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentService } from '../department.service';

@Component({
    selector: 'app-department-list',
    templateUrl: './department-list.component.html',
    styleUrls: ['./department-list.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentListComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];
    rowGroupMetadata: any;

    departments: Department[] = [];
    selectedDepartment: Department;
    loading: boolean;

    unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            {
                label: 'admin'
            },
            {
                label: 'department',
                url: 'admin/department'
            }
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

        this.getDepartments();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getDepartments() {
        this.departmentService
            .departments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.departments = result.data.departments;
                    this.updateRowGroupMetaData();
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onAdd() {
        this.router.navigate(['admin/department/add']);
    }

    onSort() {
        this.updateRowGroupMetaData();
    }
    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};
        if (this.departments) {
            for (let i = 0; i < this.departments.length; i++) {
                let rowData = this.departments[i];
                let faculty = rowData.faculty.facultyId;
                if (i === 0) {
                    this.rowGroupMetadata[faculty] = { index: 0, size: 1 };
                } else {
                    let previousRowData = this.departments[i - 1];
                    let previousRowGroup = previousRowData.faculty.facultyId;
                    if (faculty === previousRowGroup) {
                        this.rowGroupMetadata[faculty].size++;
                    } else {
                        this.rowGroupMetadata[faculty] = { index: i, size: 1 };
                    }
                }
            }
        }
    }

    onRowSelect(event) {
        this.alertService.infoToast(
            `Department: ${this.selectedDepartment.departmentId} selected`
        );
        this.router.navigate(
            ['admin/department/view', this.selectedDepartment.departmentId],
            {
                queryParams: {
                    departmentId: this.selectedDepartment.departmentId
                }
            }
        );
    }
    onContextView(event) {
        this.alertService.infoToast(
            `Department: ${this.selectedDepartment.departmentId} selected`
        );
        this.router.navigate(
            ['admin/department/view', this.selectedDepartment.departmentId],
            {
                queryParams: {
                    departmentId: this.selectedDepartment.departmentId
                }
            }
        );
    }
    onContextEdit(event) {
        this.alertService.infoToast(
            `Department: ${this.selectedDepartment.departmentId} selected`
        );
        this.router.navigate(
            ['admin/department/edit', this.selectedDepartment.departmentId],
            {
                queryParams: {
                    departmentId: this.selectedDepartment.departmentId
                }
            }
        );
    }
    onContextDelete(event) {
        this.alertService.confirm('departmentDelete');
    }
    onReject() {
        this.alertService.clear();
    }
    onConfirm() {
        this.alertService.clear();
        const departmentInput: DepartmentInput = {
            departmentId: this.selectedDepartment.departmentId,
            name: this.selectedDepartment.name,
            facultyId: this.selectedDepartment.facultyId
        };
        this.departmentService
            .deleteDepartment(departmentInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.alertService.successToast('Department Deleted');
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }
}
