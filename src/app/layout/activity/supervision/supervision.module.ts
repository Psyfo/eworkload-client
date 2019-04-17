import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { PageHeaderModule } from '../../../shared';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SupervisionRoutingModule } from './supervision-routing.module';
import { SupervisionComponent } from './supervision.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AddComponent, ListComponent, ViewComponent, SupervisionComponent],
  imports: [
    CommonModule,
    SupervisionRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class SupervisionModule { }
