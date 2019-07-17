import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { routerTransition } from '../../../../router.animations';
import {
    ActivityService,
    UserService,
    WorkloadService,
    FormalInstructionService
} from '../../../../shared/services';
import { FormalInstructionActivity } from 'src/app/shared/generated/output';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {
    activity: FormalInstructionActivity;
    activities: FormalInstructionActivity[];
    formalInstructionWorkload: number;

    userId: string;

    private unsubscribe = new Subject();

    // DT Options
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<FormalInstructionActivity> = new Subject();
    dtRouteParam: string;
    dtElement: DataTableDirective;

    constructor(
        private router: Router,
        private renderer: Renderer,
        private formalInstructionService: FormalInstructionService,
        private userService: UserService,
        private workloadService: WorkloadService
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

        this.getActivities();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.dtTrigger.unsubscribe();
    }

    getActivities() {
        this.formalInstructionService
            .formalInstructionActivitiesByUser(this.currentUser())
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activities = result.data.formalInstructionActivitiesByUser;

                this.dtTrigger.next();
            });
    }

    currentUser() {
        return this.userService.currentUserIdStatic();
    }
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['activity/lecturing/view', this.dtRouteParam], {
            queryParams: {
                activityId: this.dtRouteParam
            }
        });
    }
}
