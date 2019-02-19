import { Subject } from "rxjs";
import { Faculty } from "./../../../../../../sdk/models/Faculty";
import { FacultyApi } from "./../../../../../../sdk/services/custom/Faculty";
import { DepartmentApi } from "./../../../../../../sdk/services/custom/Department";
import { Department } from "./../../../../../../sdk/models/Department";
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
    department: Department;
    departments: Department[];
    departmentsJson: any;
    faculty: Faculty;
    faculties: Faculty[];

    // Datatable config
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Department> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private departmentApi: DepartmentApi,
        private facultyApi: FacultyApi
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
        this.facultyApi.findById(dId).subscribe(
            facultyData => {
                this.faculty = facultyData as Faculty;
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

    getFaculties() {
        this.facultyApi.find<Faculty>().subscribe(
            facultyData => {
                this.faculties = facultyData as Faculty[];
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

    getDepartments() {
        this.departmentApi.find<Department>().subscribe(
            departmentData => {
                this.getFaculties();
                this.departments = departmentData as Department[];
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

    onAdd() {
        this.router.navigate(["department/add"]);
    }
}
