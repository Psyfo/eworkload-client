import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from './approvals.component';
import { EditApprovalsComponent } from './edit-approvals/edit-approvals.component';
import { ListApprovalsComponent } from './list-approvals/list-approvals.component';
import { ViewApprovalsComponent } from './view-approvals/view-approvals.component';

@NgModule({
    declarations: [
        ApprovalsComponent,
        EditApprovalsComponent,
        ListApprovalsComponent,
        ViewApprovalsComponent
    ],
    imports: [CommonModule, ApprovalsRoutingModule, PrimeNgModulesModule]
})
export class ApprovalsModule {}
