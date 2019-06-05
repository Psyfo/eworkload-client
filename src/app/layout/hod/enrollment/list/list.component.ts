import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { routerTransition } from '../../../../router.animations';
import { Enrollment } from '../../../../shared/models/enrollment.model';
import { EnrollmentService } from '../../../../shared/services/enrollment.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    private unsubscribe = new Subject();

    // DT Options
    dtOptions: DataTables.Settings = {};
    enrollments: Enrollment[];
    dtTrigger: Subject<Enrollment> = new Subject<Enrollment>();
    dtRouteParam: string;
    dtElement: DataTableDirective;

    constructor(
        private router: Router,
        private renderer: Renderer,
        private enrollmentService: EnrollmentService
    ) {}

    ngOnInit() {
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
            }
        };

        this.getEnrollments();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.dtTrigger.unsubscribe();
    }

    getEnrollments() {
        this.enrollmentService
            .getEnrollments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.enrollments = result.data.enrollments.map(
                    enrollment => <Enrollment>(<unknown>enrollment)
                );

                this.dtTrigger.next();
            });
    }

    onAdd() {
        this.router.navigate(['hod/enrollment/add']);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[1];

        this.router.navigate(['hod/enrollment/view', this.dtRouteParam], {
            queryParams: { enrollmentYear: info[0], qualificationId: info[1] }
        });
    }
}
