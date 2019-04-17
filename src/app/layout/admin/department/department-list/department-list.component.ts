import { Component, OnInit, Renderer, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { DepartmentsGQL } from '../../../../shared/generated/output';
import { Department } from '../../../../shared/models';
import { AlertService } from './../../../../shared/services/alert.service';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-department-list',
    templateUrl: './department-list.component.html',
    styleUrls: ['./department-list.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentListComponent implements OnInit {
    departments: Department[];
    loading: boolean = false;
    errors: any;

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Department> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private departmentsGql: DepartmentsGQL
    ) {}

    // Lifecycle hooks
    ngOnChanges(changes: SimpleChanges): void {}
    ngOnInit() {
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
            }
        };

        this.getDepartments();
    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('departmentId')) {
                //this.router.navigate(["edit/:" + event.target.getAttribute("lecturerId")]);
                // this.router.navigate(['lecturer-manage/edit'], { queryParams: { lecturerId: this.dtRouteParam } });
            }
        });
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    // Methods
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/department/view', this.dtRouteParam], {
            queryParams: { departmentId: info[0] }
        });
    }

    getFaculty(dId: string) {}

    getFaculties() {}

    getDepartments() {
        this.departmentsGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.departments = result.data.departments as Department[];
            this.errors = result.errors;

            if (this.errors) {
                this.errors.forEach(error => {
                    console.log(`Error: ${error}`);
                    this.alertService.sendMessage(error.message, 'warn');
                });
            }
            this.dtTrigger.next();
        });
    }

    onAdd() {
        this.router.navigate(['admin/department/add']);
    }
}
