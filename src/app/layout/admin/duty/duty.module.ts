import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DutyRoutingModule } from './duty-routing.module';
import { DutyComponent } from './duty.component';
import { AddDutyComponent } from './add-duty/add-duty.component';
import { EditDutyComponent } from './edit-duty/edit-duty.component';
import { ViewDutyComponent } from './view-duty/view-duty.component';
import { ListDutyComponent } from './list-duty/list-duty.component';


@NgModule({
  declarations: [DutyComponent, AddDutyComponent, EditDutyComponent, ViewDutyComponent, ListDutyComponent],
  imports: [
    CommonModule,
    DutyRoutingModule
  ]
})
export class DutyModule { }
