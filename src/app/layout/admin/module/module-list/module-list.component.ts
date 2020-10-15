import { UserService } from './../../user/user.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Module, ModuleInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import * as XLXS from 'xlsx';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModuleService } from '../module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss'],
  animations: [routerTransition()]
})
export class ModuleListComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: boolean = false;

  module: Module;
  modules: any[];
  selectedModule: Module;

  csv: any;
  fileData = [];
  itemData = [];
  moduleArray: Module[];
  worksheetData = [];
  uploadedModules: ModuleInput[];
  selectedFile: File;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private moduleService: ModuleService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getModules();
    this.breadcrumbs = [{ label: 'admin' }, { label: 'module' }];
    this.menuItems = [
      {
        label: 'View',
        icon: 'pi pi-search',
        command: (event) => this.onContextView(event)
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: (event) => this.onContextEdit(event)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event) => this.onContextDelete(event)
      }
    ];
    this.cols = [
      { field: 'moduleId', header: 'Module ID' },
      { field: 'name', header: 'Module' },
      { field: 'blockId', header: 'Block' },
      { field: 'offeringTypeId', header: 'Offering Type' },
      { field: 'qualificationId', header: 'Qualification' },
      { field: 'nqfLevel', header: 'NQF Level' },
      { field: 'credits', header: 'Credits' },
      { field: 'studentsEnrolled', header: 'Enrolled' }
    ];
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods
  getModules() {
    this.loading = true;
    this.moduleService
      .modules()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.loading = result.loading;
          this.modules = result.data.modules;
        },
        (err) => {
          console.error(err);
        }
      );
  }
  onFileSelectedExcel(event) {
    // Read file data
    this.selectedFile = event.files;

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
      wsdata.forEach((element) => {
        let module: ModuleInput;
        module.id = element[3];
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
        module.moderation = element[13] === 'I' ? 'Internal' : 'External';
        module.type = 'Core';
        module.venueId = 'DB0001';

        this.uploadedModules.push(module);
      });

      // Configure xlxs output
      const htmlstr = XLXS.write(wb, {
        type: 'string',
        bookType: 'html'
      });

      // Open modal and present excel html then return focus to modal
      // this.open(document.getElementById('content'));
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
  async onAddBulk() {
    await this.moduleService
      .addModules(this.uploadedModules.slice(1))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result) => {
        this.alertService.successToast('Bulk upload complete');
      });
  }

  onContextView(event) {
    this.alertService.infoToast(`Module: ${this.selectedModule.id} selected`);

    this.router.navigate(['admin/module/view', this.selectedModule.id], {
      queryParams: {
        id: this.selectedModule.id
      }
    });
  }
  onContextEdit(event) {
    this.alertService.infoToast(`Module: ${this.selectedModule.id} selected`);

    this.router.navigate(['admin/module/edit', this.selectedModule.id], {
      queryParams: {
        id: this.selectedModule.id
      }
    });
  }
  onContextDelete(event) {
    this.alertService.confirm('moduleDelete');
  }
  onReject() {
    this.alertService.clear();
  }
  onConfirm() {
    this.alertService.clear();
    const moduleInput: ModuleInput = {
      id: this.selectedModule.id,
      moduleId: this.selectedModule.moduleId,
      blockId: this.selectedModule.blockId,
      offeringTypeId: this.selectedModule.offeringTypeId,
      qualificationId: this.selectedModule.qualificationId
    };
    this.moduleService
      .deleteModule(moduleInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.alertService.successToast('Activity Deleted');
        },
        (err) => {
          console.error(err);
        }
      );
  }
  onRowSelect(event) {
    this.alertService.infoToast(`Module: ${this.selectedModule.id} selected`);
    this.router.navigate(['admin/module/view', this.selectedModule.id], {
      queryParams: {
        id: this.selectedModule.id
      }
    });
  }
}
