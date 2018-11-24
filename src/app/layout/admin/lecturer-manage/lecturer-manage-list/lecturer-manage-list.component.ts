import { Component, OnInit, Renderer } from '@angular/core';
import { Lecturer, LecturerApi, PositionApi, LoggerService, LoopBackConfig, Position } from '../../../../../../sdk';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../../../../environments/environment';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-lecturer-manage-list',
    templateUrl: './lecturer-manage-list.component.html',
    styleUrls: ['./lecturer-manage-list.component.scss'],
    animations: [routerTransition()]
})
export class LecturerManageListComponent implements OnInit {
    // Properties
    lecturers: Lecturer[];
    positions: Position[];


    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Lecturer> = new Subject();


    constructor(
        private router: Router,
        private lecturerApi: LecturerApi,
        private positionApi: PositionApi,
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
        this.getPositions();
    }

    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', (event) => {
            if (event.target.hasAttribute("view-person-id")) {
                this.router.navigate(["lecturer-manage/view/:lecturerId" + event.target.getAttribute("view-person-id")]);
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

    getPositions() {
        this.positionApi.find()
            .subscribe(
                (positionsList) => {
                    this.positions = positionsList as Position[];
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                }
            );
    }

    positionIdToName(positionId: string): any {
        return this.positions.find(
            pos => {
                return pos.positionId === positionId;
            }).name;
    }

    onNewLecturer() {
        this.router.navigate(['lecturer-manage/add']);
    }

    rowClickHandler(info: any) {
        alert(info.lecturerId + ' ' + info.name.firstName);
    }
}
