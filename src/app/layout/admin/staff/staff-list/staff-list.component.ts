import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { routerTransition } from '../../../../router.animations';
import { UserService } from '../../../../shared/services';
import { User, Discipline } from 'src/app/shared/generated/output';

@Component({
    selector: 'app-staff-list',
    templateUrl: './staff-list.component.html',
    styleUrls: ['./staff-list.component.scss'],
    animations: [routerTransition()]
})
export class StaffListComponent implements OnInit {
    user: User;
    users: User[] = [];
    positions: Position[] = [];
    discipline: Discipline;

    loading: boolean;
    errors: any;

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private router: Router,
        private renderer: Renderer,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
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

        this.getUsers();
    }

    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('staffId')) {
                //this.router.navigate(["edit/:" + event.target.getAttribute("staffId")]);
                // this.router.navigate(['staff/edit'], { queryParams: { staffId: this.dtRouteParam } });
            }
        });
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    getUsers() {
        this.userService.getUsers().subscribe(result => {
            this.users = result.data.users.map(user => <User>(<unknown>user));
            this.dtTrigger.next();
        });
    }

    onAdd() {
        this.router.navigate(['admin/staff/add']);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/staff/view', this.dtRouteParam], {
            queryParams: { userId: info[0] }
        });
    }
}
