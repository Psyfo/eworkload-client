import { Component, OnInit, Renderer } from '@angular/core';
import { Lecturer, LecturerApi, PositionApi, LoggerService, LoopBackConfig, Position } from '../../../../../../sdk';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../../../../environments/environment';
import { routerTransition } from '../../../../router.animations';
import { DataTableDirective } from 'angular-datatables';

@Component({
    selector: 'app-lecturer-manage-list',
    templateUrl: './lecturer-manage-list.component.html',
    styleUrls: ['./lecturer-manage-list.component.scss'],

})
export class LecturerManageListComponent implements OnInit {
    // Properties
    lecturers: Lecturer[];
    positions: Position[];


    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Lecturer> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;



    constructor(
        private router: Router,
        private lecturerApi: LecturerApi,
        private flashMessagesService: FlashMessagesService,
        private loggerService: LoggerService,
        private renderer: Renderer
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

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

        this.getLecturers();

    }

    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', (event) => {
            console.log(event.target);

            if (event.target.hasAttribute("lecturerId")) {
                this.router.navigate(["lecturer-manage/edit/:lecturerId" + event.target.getAttribute("lecturerId")]);
                // this.router.navigate(['lecturer-manage/edit'], { queryParams: { lecturerId: this.dtRouteParam } });
            }
        });
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }


    getLecturers() {
        this.lecturerApi.find()
            .subscribe(
                (lecturerList) => {
                    this.lecturers = lecturerList as Lecturer[];
                    this.dtTrigger.next();
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                }
            );
    }

    onNewLecturer() {
        this.router.navigate(['lecturer-manage/add']);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        // this.router.navigate(['lecturer-manage/edit'], { queryParams: { lecturerId: info[0] } });
    }
}
