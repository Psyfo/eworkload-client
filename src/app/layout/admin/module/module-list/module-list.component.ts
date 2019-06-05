import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { routerTransition } from '../../../../router.animations';
import { Module } from '../../../../shared/models';
import { ModuleService } from '../../../../shared/services';
import { takeUntil } from 'rxjs/operators';
import * as XLXS from 'xlsx';

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss'],
    animations: [routerTransition()]
})
export class ModuleListComponent implements OnInit {
    modules: Module[];
    selectedFile;

    private unsubscribe = new Subject();

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Module> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private router: Router,
        private renderer: Renderer,
        private moduleService: ModuleService
    ) {}

    ngOnInit() {
        this.getModules();

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
    }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('moduleId')) {
                //this.router.navigate(["admin/module/edit/:" + event.target.getAttribute("moduleId")]);
                //this.router.navigate(['admin/module/edit'], { queryParams: { lecturerId: this.dtRouteParam } });
            }
        });
    }

    // Methods
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/module/view', this.dtRouteParam], {
            queryParams: { moduleId: info[0] }
        });
    }
    getModules() {
        this.moduleService
            .getModules()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.modules = result.data.modules.map(
                    module => <Module>(<unknown>module)
                );
                this.dtTrigger.next();
            });
    }
    upload(event) {}
    onAdd() {
        this.router.navigate(['admin/module/add']);
    }
}
