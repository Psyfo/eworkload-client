import { QualificationService } from './../qualification/qualification.service';
import { DisciplineService } from './../discipline/discipline.service';
import { IDiscipline } from './../discipline/discipline.interface';
import { IQualification } from './../qualification/qualification.interface';
import { IOfferingType } from './../offering-type/offering-type.interface';
import { OfferingTypeService } from './../offering-type/offering-type.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { IModule } from './module.interface';
import { ModuleService } from './module.service';
import { Table } from 'primeng/table';
import { BlockService } from '../block/block.service';
import { IBlock } from '../block/block.interface';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  animations: [routerTransition()]
})
export class ModuleComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  moduleDialog: boolean;
  modules: IModule[];
  module: IModule;
  selectedModules: IModule[];
  blocks: IBlock[];
  selectedBlock: IBlock;
  offeringTypes: IOfferingType[];
  selectedOfferingType: IOfferingType;
  qualifications: IQualification[];
  selectedQualification: IQualification;
  disciplines: IDiscipline[];
  selectedDiscipline: IDiscipline;
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private moduleService: ModuleService,
    private blockService: BlockService,
    private offeringTypeService: OfferingTypeService,
    private disciplineService: DisciplineService,
    private qualificationService: QualificationService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'module',
        url: 'admin/module'
      }
    ];
    this.getModules();
    this.getBlocks();
    this.getOfferingTypes();
    this.getQualifications();
    this.getDisciplines();
    this.timer = setInterval(() => {
      this.getModules();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Module destroyed');
  }

  getModules() {
    this.moduleService.all().subscribe((data) => {
      this.modules = data;
    });
  }

  getBlocks() {
    this.blockService.all().subscribe((data) => (this.blocks = data));
  }

  getOfferingTypes() {
    this.offeringTypeService
      .all()
      .subscribe((data) => (this.offeringTypes = data));
  }

  getQualifications() {
    this.qualificationService
      .all()
      .subscribe((data) => (this.qualifications = data));
  }

  getDisciplines() {
    this.disciplineService.all().subscribe((data) => (this.disciplines = data));
  }

  openNew() {
    this.module = {};
    this.submitted = false;
    this.moduleDialog = true;
  }

  deleteSelectedModules() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.modules = this.modules.filter(
          (val) => !this.selectedModules.includes(val)
        );
        this.selectedModules = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Modules deleted',
          life: 3000
        });
      }
    });
  }

  editModule(module: IModule) {
    this.module = { ...module };
    this.moduleDialog = true;
  }

  deleteModule(module: IModule) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + module.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.moduleService.delete(module._id).subscribe((data) => {
          this.modules = [...this.modules];
        });

        this.module = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Module Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.moduleDialog = false;
    this.submitted = false;
  }

  saveModule() {
    this.submitted = true;

    if (this.module.name.trim()) {
      if (this.module._id) {
        this.moduleService
          .update(this.module)
          .subscribe((data) => (this.module = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'module Updated',
          life: 3000
        });
      } else {
        this.moduleService.create(this.module).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'module Created',
          life: 3000
        });
      }

      //this.modules = [...this.modules];
      this.moduleDialog = false;
      this.module = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.modules.length; i++) {
      if (this.modules[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
