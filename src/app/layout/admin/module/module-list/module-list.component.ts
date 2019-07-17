import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Module, ModuleInput } from 'src/app/shared/generated/output';
import * as XLXS from 'xlsx';

import {
    ChangeDetectorRef,
    Component,
    OnInit,
    Renderer,
    ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { routerTransition } from '../../../../router.animations';
import { AlertService, ModuleService } from '../../../../shared/services';

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss'],
    animations: [routerTransition()]
})
export class ModuleListComponent implements OnInit {
    module: Module;
    modules: Module[];

    csv: any;
    fileData = [];
    itemData = [];
    moduleArray: Module[];
    worksheetData = [];
    uploadedModules: ModuleInput[];
    selectedFile: File;

    private unsubscribe = new Subject();

    // Datatable config
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<Module> = new Subject();
    dtRouteParam: string;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private changeDetector: ChangeDetectorRef,
        private modalService: NgbModal,
        private moduleService: ModuleService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit() {
        this.getModules();

        // Initialize DT
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            responsive: true,
            autoWidth: true,
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
    }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('moduleId')) {
                //this.router.navigate(["admin/module/edit/:" + event.target.getAttribute("moduleId")]);
                //this.router.navigate(['admin/module/edit'], { queryParams: { lecturerId: this.dtRouteParam } });
            }
        });
    }

    // Methods
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/module/view', this.dtRouteParam], {
            queryParams: {
                moduleId: info[0],
                blockId: info[1],
                offeringTypeId: info[2],
                qualificationId: info[3]
            }
        });
    }
    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();

            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }
    getModules() {
        this.moduleService
            .getModules()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.modules = result.data.modules.map(
                    module => <Module>(<unknown>module)
                );
                this.dtTrigger.next();
            });
    }
    onFileSelectedExcel(input: HTMLInputElement) {
        // Read file data
        this.selectedFile = input.files[0];

        const reader = new FileReader();
        reader.readAsArrayBuffer(this.selectedFile);
        console.log(this.selectedFile);

        // XLXS load
        reader.onload = () => {
            const data = reader.result;
            console.log(data);
            const wb = XLXS.read(data, { type: 'array' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const wsdata = <any>XLXS.utils.sheet_to_json(ws, { header: 1 });
            this.worksheetData = wsdata;

            // Get work sheet data into module array
            wsdata.forEach(element => {
                let module: ModuleInput;
                module.moduleId = element[3];
                module.qualificationId = element[2];
                module.name = element[4];
                module.blockId = String(element[5]);
                module.offeringTypeId = element[6];
                module.nqfLevel = String(element[7]);
                module.credits = parseInt(element[8]);
                module.studyPeriod = String(element[9]);
                module.lecturedBy = String(element[10]);
                module.disciplineId = element[11];
                module.assessmentMethod =
                    element[12] === 'CA' ? 'Continuous Assessment' : 'Exam';
                module.moderation =
                    element[13] === 'I' ? 'Internal' : 'External';
                module.type = 'Core';
                module.venueId = 'DB0001';
                module.groupSize = 1;

                this.uploadedModules.push(module);
            });

            // Configure xlxs output
            const htmlstr = XLXS.write(wb, {
                type: 'string',
                bookType: 'html'
            });

            // Open modal and present excel html then return focus to modal
            this.open(document.getElementById('content'));
            document.getElementById('excel').innerHTML = htmlstr;
            document.getElementById('excel').focus();
        };
    }
    toObject(item) {
        const object = item.split;
    }
    onAdd() {
        this.router.navigate(['admin/module/add']);
    }
    onAddBulk() {
        setTimeout(() => {
            this.moduleService
                .addModules(this.uploadedModules.slice(1))
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(result => {
                    console.log(result.addModules);
                    this.alertService.sendMessage(
                        'Bulk upload complete',
                        'success'
                    );

                    this.modalService.dismissAll('Operations complete');
                });
            this.rerender();
        });
    }
    enabled: boolean;
    reloadTree() {
        this.enabled = false;
        // now notify angular to check for updates
        this.changeDetector.detectChanges();
        // change detection should remove the component now
        // then we can enable it again to create a new instance
        this.enabled = true;
    }
    closeResult: string;
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
            .result.then(
                result => {
                    this.closeResult = `Closed with: ${result}`;
                },
                reason => {
                    this.closeResult = `Dismissed ${this.getDismissReason(
                        reason
                    )}`;
                }
            );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
