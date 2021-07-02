import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DisciplineRoutingModule } from './discipline-routing.module';
import { DisciplineComponent } from './discipline.component';

@NgModule({
  imports: [
    CommonModule,
    DisciplineRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    PrimeNgModulesModule
  ],
  declarations: [DisciplineComponent]
})
export class DisciplineModule {}
