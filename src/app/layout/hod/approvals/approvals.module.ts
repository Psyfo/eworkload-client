import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from './approvals.component';
import { ListComponent } from './list/list.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [ApprovalsComponent, ListComponent],
  imports: [
    CommonModule,
    ApprovalsRoutingModule,
    PageHeaderModule
  ]
})
export class ApprovalsModule { }
