import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';

@NgModule({
  declarations: [ModuleComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    PageHeaderModule,
    PrimeNgModulesModule,
    ReactiveFormsModule
  ]
})
export class ModuleModule {
  constructor() {}
}
