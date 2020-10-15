import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { routerTransition } from 'src/app/router.animations';
import { Module, ModuleInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

@Component({
  selector: 'app-module-enrollments',
  templateUrl: './module-enrollments.component.html',
  styleUrls: ['./module-enrollments.component.scss'],
  animations: [routerTransition()]
})
export class ModuleEnrollmentsComponent implements OnInit {
  menuItems: MenuItem[];
  cols: any[];
  isSubmitting: boolean;
  modulesLoading: boolean;

  modules: Module[];
  selectedModule: Module;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private moduleService: ModuleService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'moduleId', header: 'ModuleId' },
      { field: 'name', header: 'Module Name' },
      { field: 'blockLabel', header: 'Block' },
      { field: 'offeringTypeLabel', header: 'Offering Type' },
      { field: 'disciplineLabel', header: 'Discipline' },
      { field: 'departmentId', header: 'Department' },
      { field: 'lecturedBy', header: 'Lectured By' },
      { field: 'studentsEnrolled', header: 'Students Enrolled' }
    ];
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

    this.getModules();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getModules() {
    this.modulesLoading = true;
    this.moduleService
      .modules()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.modules = result.data.modules.map((module) => {
            const mod: any = module as any;
            if (module.block) {
              mod.blockLabel = `${module.block.name} (${module.block.blockId})`;
            }
            if (module.offeringType) {
              mod.offeringTypeLabel = `${module.offeringType.description} (${module.offeringType.offeringTypeId})`;
            }
            if (module.qualification) {
              mod.qualificationLabel = `${module.qualification.name} (${module.qualification.qualificationId})`;
            }
            if (module.discipline) {
              mod.disciplineLabel = `${module.discipline.name} (${module.discipline.disciplineId})`;
            }

            return mod;
          });
          this.modulesLoading = false;
        },
        (err) => {
          console.error(err);
        }
      );
  }

  onSubmit() {}
  onAdd() {}
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
