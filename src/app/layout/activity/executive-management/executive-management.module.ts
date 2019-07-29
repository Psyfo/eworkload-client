import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddExecutiveManagementComponent } from './add-executive-management/add-executive-management.component';
import { EditExecutiveManagementComponent } from './edit-executive-management/edit-executive-management.component';
import { ExecutiveManagementRoutingModule } from './executive-management-routing.module';
import { ExecutiveManagementComponent } from './executive-management.component';
import { ListExecutiveManagementComponent } from './list-executive-management/list-executive-management.component';
import { ViewExecutiveManagementComponent } from './view-executive-management/view-executive-management.component';

@NgModule({
    declarations: [
        AddExecutiveManagementComponent,
        EditExecutiveManagementComponent,
        ListExecutiveManagementComponent,
        ViewExecutiveManagementComponent,
        ExecutiveManagementComponent
    ],
    imports: [CommonModule, ExecutiveManagementRoutingModule]
})
export class ExecutiveManagementModule {}
