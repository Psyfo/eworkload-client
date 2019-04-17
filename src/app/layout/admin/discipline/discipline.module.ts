import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderModule } from '../../../shared';
import { DisciplineAddComponent } from './discipline-add/discipline-add.component';
import { DisciplineEditComponent } from './discipline-edit/discipline-edit.component';
import { DisciplineRoutingModule } from './discipline-routing.module';
import { DisciplineComponent } from './discipline.component';
import { DisciplineListComponent } from './discipline-list/discipline-list.component';
import { DisciplineViewComponent } from './discipline-view/discipline-view.component';
import { DisciplineDeleteComponent } from './discipline-delete/discipline-delete.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DisciplineRoutingModule,
    PageHeaderModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  declarations: [DisciplineComponent, DisciplineAddComponent, DisciplineEditComponent, DisciplineListComponent, DisciplineViewComponent, DisciplineDeleteComponent]
})
export class DisciplineModule { }
