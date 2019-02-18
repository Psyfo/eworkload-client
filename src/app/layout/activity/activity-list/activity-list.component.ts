import { Component, OnInit, Input, Renderer } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Subject } from 'rxjs';
import { Lecturer, DutyApi, LecturerApi, ActivityApi, LectureStackApi, ResearchApi, CommInstructionApi, PublicServiceApi, EvidenceApi, Activity, Duty } from '../../../../../sdk';
import { DataTableDirective } from 'angular-datatables';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss'],
    animations: [routerTransition()]
})
export class ActivityListComponent implements OnInit {
    // properties
    activities: Activity[];
    duties: Duty[];
    lecturer: Lecturer;

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Lecturer> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;


    constructor(
        private router: Router,
        private renderer: Renderer,
        private flashMessagesService: FlashMessagesService,
        private lecturerApi: LecturerApi,
        private dutyApi: DutyApi,
        private activityApi: ActivityApi,
        private lectureStackApi: LectureStackApi,
        private researchApi: ResearchApi,
        private commInstructionApi: CommInstructionApi,
        private publicServiceApi: PublicServiceApi,
        private evidenceApi: EvidenceApi
    ) { }

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

        this.getDuties();

        this.getActivities();
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


    getDuties() {
        // get duties
        this.dutyApi.find<Duty>()
        .subscribe(
            (dutyList) => {
                this.duties = dutyList;
            },
            (error) => {
                console.log(error);
                this.flashMessagesService.show(error.message, {cssClass: 'alert-danger'});
            }
        );
    }

    getActivities() {
        // get activities
        this.activityApi.find<Activity>()
        .subscribe(
            (activityList) => {
                this.activities = activityList;
                this.dtTrigger.next();
            },
            (error) => {
                console.log(error);
                this.flashMessagesService.show(error.message, {cssClass: 'alert-danger'});
            }
        );
    }

    onNewActivity() {
        this.router.navigate(['activity/add']);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        // this.router.navigate(['lecturer-manage/edit'], { queryParams: { lecturerId: info[0] } });
    }
}
