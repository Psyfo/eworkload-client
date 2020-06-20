import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/shared/modules';
import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { takeUntil } from 'rxjs/operators';
import { ModuleInput, Module } from 'src/app/shared/generated';
import { PickList } from 'primeng/picklist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stack-module',
  templateUrl: './stack-modules.component.html',
  styleUrls: ['./stack-modules.component.scss'],
  animations: [routerTransition()]
})
export class StackModulesComponent implements OnInit {
  @ViewChild('f', { read: NgForm }) form: NgForm;

  modules: Module[];
  unstackedModules: Module[];
  selectedModule: Module;
  selectedModuleToStack: Module;
  stackedModules: Module[];

  isSubmitting: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private moduleService: ModuleService
  ) {}

  ngOnInit() {
    this.getModules();
    this.getUnstackedModules();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getModules() {
    this.moduleService
      .modules()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.modules = result.data.modules.map(module => {
            let mod: any = module;
            if (module.block && module.offeringType && module.qualification) {
              mod.label = `${module.moduleId} - ${module.name} - (${module.block.name}) (${module.offeringType.description})`;
            }
            return mod;
          });
        },
        err => {
          console.error(err);
        }
      );
  }
  getUnstackedModules() {
    this.moduleService
      .unstackedModules()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.unstackedModules = result.data.unstackedModules.map(module => {
            let mod: any = module;
            if (module) {
              mod.label = `${module.moduleId} - ${module.name} - (${module.block.name}) (${module.offeringType.description})`;
            }
            return mod;
          });
        },
        err => {
          console.error(err);
        }
      );
  }
  getStackedWithModules() {
    this.moduleService
      .stackedWith(this.selectedModule.id, this.selectedModule.stackId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.stackedModules = result.data.stackedWith.map(module => {
            let mod: any = module;
            if (module) {
              mod.label = `${module.moduleId} - ${module.name} - (${module.block.name}) (${module.offeringType.description})`;
            }
            return mod;
          });
        },
        err => {
          console.error(err);
        }
      );
  }
  onChanges(event) {}
  onModuleSelected(event) {
    this.getStackedWithModules();
  }
  onAddModuleToStack(event) {
    this.moduleService
      .addModuleToStack(
        this.selectedModuleToStack.id,
        this.selectedModule.stackId
      )
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          console.log(result.data.addModuleToStack);

          this.alertService.successToast('Module added to stack');
        },
        err => {
          console.error(err);
        }
      );
  }
  onReset(event) {
    this.form.reset();
  }
  onRemoveStackedModule(event) {}
}
