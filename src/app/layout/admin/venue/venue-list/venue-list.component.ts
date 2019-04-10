import { Component, OnInit, Renderer, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { AlertService } from '../../../../shared/services';

@Component({
    selector: "app-venue-list",
    templateUrl: "./venue-list.component.html",
    styleUrls: ["./venue-list.component.scss"]
})
export class VenueListComponent implements OnInit {

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;


    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
    ) {}

    // Lifecycle hooks
    ngOnChanges(changes: SimpleChanges): void {

    }
    ngOnInit() {
        // Initialize DT
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
            processing: true,
            responsive: true,
            autoWidth: true,
            rowCallback: (row: Node, data: any[] | Object, index: number) => {
                const self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $("td", row).unbind("click");
                $("td", row).bind("click", () => {
                    self.rowClickHandler(data);
                });
                return row;
            }
        };

        this.initializeTable();

    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal("document", "click", event => {
            // console.log(event.target);

            if (event.target.hasAttribute("venueId")) {
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

        this.router.navigate(["venue/view", this.dtRouteParam], {
            queryParams: { departmentId: info[0] }
        });
    }

    initializeTable() {
        
    }

    onAdd() {
        this.router.navigate(["venue/add"]);
    }
}
