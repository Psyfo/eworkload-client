import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { Qualification } from '../../../../shared/models';
import {
    AlertService,
    QualificationService,
} from '../../../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-qualification-list',
    templateUrl: './qualification-list.component.html',
    styleUrls: ['./qualification-list.component.scss'],
    animations: [routerTransition()],
})
export class QualificationListComponent implements OnInit {
    qualification: Qualification = new Qualification();
    qualifications: Qualification[];

    private unsubscribe = new Subject();

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Qualification> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private qualificationService: QualificationService
    ) {}

    ngOnInit() {
        this.getQualifications();

        // Initialize DT
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            responsive: true,
            autoWidth: true,
            rowCallback: (row: Node, data: any[] | Object, index: number) => {
                const self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td', row).bind('click', () => {
                    self.rowClickHandler(data);
                });
                return row;
            },
        };
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.dtTrigger.unsubscribe();
    }

    // Methods
    getQualifications() {
        this.qualificationService
            .getQualifications()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualifications.map(
                    qualification => <Qualification>(<unknown>qualification)
                );
                this.dtTrigger.next();
            });
    }
    onAdd() {
        this.router.navigate(['admin/qualification/add']);
    }
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/qualification/view', this.dtRouteParam], {
            queryParams: { qualificationId: info[0] },
        });
    }
}
