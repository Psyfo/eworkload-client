import { Subject } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "./../../../../shared/services/alert.service";
import { Component, OnInit, Renderer, SimpleChanges } from "@angular/core";
import { DataTableDirective } from "angular-datatables";

@Component({
    selector: "app-department-list",
    templateUrl: "./department-list.component.html",
    styleUrls: ["./department-list.component.scss"]
})
export class DepartmentListComponent implements OnInit {

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer
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

        this.getDepartments();

    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal("document", "click", event => {
            // console.log(event.target);

            if (event.target.hasAttribute("departmentId")) {
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

        this.router.navigate(["department/view", this.dtRouteParam], {
            queryParams: { departmentId: info[0] }
        });
    }

    getFaculty(dId: string) {

    }

    getFaculties() {

    }

    getDepartments() {
        
    }

    onAdd() {
        this.router.navigate(["department/add"]);
    }
}
