import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from './approvals.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [ApprovalsComponent, ListComponent],
    imports: [CommonModule, ApprovalsRoutingModule, PageHeaderModule]
})
export class ApprovalsModule {}
