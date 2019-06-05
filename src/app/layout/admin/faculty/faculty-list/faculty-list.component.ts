import { Router } from '@angular/router';
import { AlertService } from './../../../../shared/services/alert.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    Renderer
} from '@angular/core';
import { FacultiesGQL } from '../../../../shared/generated/output';
import { Faculty } from '../../../../shared/models/faculty.model';
import { routerTransition } from '../../../../router.animations';
import { FacultyService } from '../../../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-faculty-list',
    templateUrl: './faculty-list.component.html',
    styleUrls: ['./faculty-list.component.scss'],
    animations: [routerTransition()]
})
export class FacultyListComponent implements OnInit {
    faculties: Faculty[];

    private unsubscribe = new Subject();

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {
        // Initialize DT
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

        this.getFaculties();
    }

    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('factultyId')) {
                //this.router.navigate(["edit/:" + event.target.getAttribute("lecturerId")]);
                // this.router.navigate(['lecturer-manage/edit'], { queryParams: { lecturerId: this.dtRouteParam } });
            }
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.dtTrigger.unsubscribe();
    }

    // Methods

    getFaculties(): void {
        this.facultyService
            .getFaculties()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.faculties = result.data.faculties.map(
                    faculty => <Faculty>(<unknown>faculty)
                );
                this.dtTrigger.next();
            });
    }

    onAddFaculty() {
        this.router.navigate(['admin/faculty/add']);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/faculty/view', this.dtRouteParam], {
            queryParams: { facultyId: info[0] }
        });
    }
}
