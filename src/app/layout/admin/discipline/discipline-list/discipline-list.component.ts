import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { routerTransition } from '../../../../router.animations';
import { Discipline } from '../../../../shared/models';
import { DisciplineService } from '../../../../shared/services';

@Component({
    selector: 'app-discipline-list',
    templateUrl: './discipline-list.component.html',
    styleUrls: ['./discipline-list.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineListComponent implements OnInit {
    discipline: Discipline;
    disciplines: Discipline[];

    private unsubscribe = new Subject();

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Discipline> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private router: Router,
        private renderer: Renderer,
        private disciplineService: DisciplineService
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

        this.getDisciplines();
    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('disciplineId')) {
                //this.router.navigate(["edit/:" + event.target.getAttribute("staffId")]);
                // this.router.navigate(['staff/edit'], { queryParams: { staffId: this.dtRouteParam } });
            }
        });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.dtTrigger.unsubscribe();
    }

    // Methods
    getDisciplines() {
        this.disciplineService
            .getDisciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines.map(
                    discipline => <Discipline>(<unknown>discipline)
                );
                this.dtTrigger.next();
            });
    }
    onAdd() {
        this.router.navigate(['admin/discipline/add']);
    }
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0].toLowerCase();

        this.router.navigate(['admin/discipline/view', this.dtRouteParam], {
            queryParams: { disciplineId: this.dtRouteParam }
        });
    }
}
