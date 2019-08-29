import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Duty } from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { DutyService } from '../duty.service';
import { routerTransition } from 'src/app/router.animations';

@Component({
    selector: 'app-list-duty',
    templateUrl: './list-duty.component.html',
    styleUrls: ['./list-duty.component.scss'],
    animations: [routerTransition()]
})
export class ListDutyComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];

    duties: Duty[];
    selectedDuty: Duty;
    loading: boolean;

    unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private dutyService: DutyService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            {
                label: 'admin'
            },
            {
                label: 'duty',
                url: 'admin/duty'
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
        this.cols = [
            { field: 'dutyId', header: 'Duty ID' },
            { field: 'name', header: 'Name' },
            { field: 'description', header: 'Description' }
        ];

        this.getDuties();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getDuties() {
        this.dutyService
            .duties()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.loading = result.loading;
                    this.duties = result.data.duties;
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    onAdd() {
        this.router.navigate(['admin/duty/add']);
    }

    onRowSelect(event) {
        this.alertService.infoToast(
            `Duty: ${this.selectedDuty.dutyId} selected`
        );
        this.router.navigate(['admin/duty/view', this.selectedDuty.dutyId], {
            queryParams: {
                dutyId: this.selectedDuty.dutyId
            }
        });
    }
    onContextView(event) {
        this.alertService.infoToast(
            `Duty: ${this.selectedDuty.dutyId} selected`
        );
        this.router.navigate(['admin/duty/view', this.selectedDuty.dutyId], {
            queryParams: {
                dutyId: this.selectedDuty.dutyId
            }
        });
    }
    onContextEdit(event) {
        this.alertService.infoToast(
            `Duty: ${this.selectedDuty.dutyId} selected`
        );
        this.router.navigate(['admin/duty/edit', this.selectedDuty.dutyId], {
            queryParams: {
                dutyId: this.selectedDuty.dutyId
            }
        });
    }
    onContextDelete(event) {}
    onConfirm(event) {}
    onReject(event) {}
}
