import { AlertService } from "./../../../../shared/services/alert.service";
import { Component, OnInit, Renderer } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../../../../environments/environment";
import { routerTransition } from "../../../../router.animations";
import { DataTableDirective } from "angular-datatables";

@Component({
    selector: "app-staff-list",
    templateUrl: "./staff-list.component.html",
    styleUrls: ["./staff-list.component.scss"],
    animations: [routerTransition()]
})
export class StaffListComponent implements OnInit {
    // Properties
    positions: Position[];

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private router: Router,
        private renderer: Renderer
    ) {

    }

    ngOnInit() {
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 5,
            processing: true,
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

        this.getStaffs();
    }

    ngAfterViewInit(): void {
        this.renderer.listenGlobal("document", "click", event => {
            // console.log(event.target);

            if (event.target.hasAttribute("staffId")) {
                //this.router.navigate(["edit/:" + event.target.getAttribute("staffId")]);
                // this.router.navigate(['staff/edit'], { queryParams: { staffId: this.dtRouteParam } });
            }
        });
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    getStaffs() {
        
    }

    onAdd() {
        this.router.navigate(["staff/add"]);
    }

    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(["staff/view", this.dtRouteParam], {
            queryParams: { staffId: info[0] }
        });
    }
}
