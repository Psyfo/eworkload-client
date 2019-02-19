import { Router } from "@angular/router";
import { FacultyApi } from "./../../../../../../sdk/services/custom/Faculty";
import { AlertService } from "./../../../../shared/services/alert.service";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { Faculty } from "./../../../../../../sdk/models/Faculty";
import { Component, OnInit, OnDestroy, AfterViewInit, Renderer } from "@angular/core";

@Component({
    selector: "app-faculty-list",
    templateUrl: "./faculty-list.component.html",
    styleUrls: ["./faculty-list.component.scss"],
})
export class FacultyListComponent implements OnInit {
    // Properties
    faculties: Faculty[];

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Faculty> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private facultyApi: FacultyApi,
        private router: Router,
        private renderer: Renderer
    ) {}

    ngOnInit() {
        // Initialize DT
        this.dtOptions = {
            pagingType: "full_numbers",
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
        this.renderer.listenGlobal('document', 'click', (event) => {
            // console.log(event.target);

            if (event.target.hasAttribute("factultyId")) {
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

    getFaculties(): void {
        this.facultyApi.find<Faculty>().subscribe(
            facultyList => {
                this.faculties = facultyList as Faculty[];
                this.dtTrigger.next();
            },
            error => {
                console.log(`Status Code ${error.status}`);
                console.log(`Message: ${error.message}`);
                this.alertService.sendMessage(
                    `Status: ${error.status}`,
                    "danger"
                );
                this.alertService.sendMessage(error.message, "danger");
            }
        );
    }

    onAddFaculty() {
        this.router.navigate(["faculty/add"]);
    }


    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['faculty/view', this.dtRouteParam], { queryParams: { facultyId: info[0] } });
    }
}
