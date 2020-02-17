import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DisciplineAddComponent } from './discipline-add/discipline-add.component';
import { DisciplineEditComponent } from './discipline-edit/discipline-edit.component';
import { DisciplineListComponent } from './discipline-list/discipline-list.component';
import { DisciplineRoutingModule } from './discipline-routing.module';
import { DisciplineViewComponent } from './discipline-view/discipline-view.component';
import { DisciplineComponent } from './discipline.component';

@NgModule({
  imports: [
    CommonModule,
    DisciplineRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    PrimeNgModulesModule
  ],
  declarations: [
    DisciplineComponent,
    DisciplineAddComponent,
    DisciplineEditComponent,
    DisciplineListComponent,
    DisciplineViewComponent
  ]
})
export class DisciplineModule {}
