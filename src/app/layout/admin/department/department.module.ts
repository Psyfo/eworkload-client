import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    PrimeNgModulesModule
  ],
  declarations: [DepartmentComponent]
})
export class DepartmentModule {}
