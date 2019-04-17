import { Component, OnInit, Renderer } from '@angular/core';
import { Subject } from 'rxjs';
import { Discipline } from '../../../../shared/models';
import { DataTableDirective } from 'angular-datatables';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { DisciplinesGQL } from '../../../../shared/generated/output';

@Component({
    selector: 'app-discipline-list',
    templateUrl: './discipline-list.component.html',
    styleUrls: ['./discipline-list.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineListComponent implements OnInit {
    discipline: Discipline;
    disciplines: Discipline[];

    loading: boolean;
    errors: any;

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Discipline> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private router: Router,
        private renderer: Renderer,
        private disciplinesGql: DisciplinesGQL
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
        this.dtTrigger.unsubscribe();
    }

    getDisciplines() {
        this.disciplinesGql.watch().valueChanges.subscribe(result => {
            this.disciplines = result.data.disciplines as Discipline[];
            this.loading = result.loading;
            this.errors = result.errors;

            this.dtTrigger.next();
        });
    }

    onAdd() {
        this.router.navigate(['admin/discipline/add']);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/discipline/view', this.dtRouteParam], {
            queryParams: { disciplineId: info[0] }
        });
    }
}
