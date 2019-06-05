import { Component, OnInit, Renderer, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { routerTransition } from '../../../../router.animations';
import { DepartmentsGQL } from '../../../../shared/generated/output';
import { Department } from '../../../../shared/models';
import { AlertService } from './../../../../shared/services/alert.service';
import { takeUntil } from 'rxjs/operators';
import { DepartmentService } from '../../../../shared/services';

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

    private unsubscribe = new Subject();

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Department> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private departmentsService: DepartmentService
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
        this.unsubscribe.next();
        this.unsubscribe.complete();
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

    getDepartments() {
        this.departmentsService
            .getDepartments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.departments = result.data.departments.map(
                    department => <Department>(<unknown>department)
                );
                this.dtTrigger.next();
            });
    }

    onAdd() {
        this.router.navigate(['admin/department/add']);
    }
}
