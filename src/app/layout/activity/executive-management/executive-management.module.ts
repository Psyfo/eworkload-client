import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExecutiveManagementRoutingModule } from './executive-management-routing.module';
import { ExecutiveManagementComponent } from './executive-management.component';

@NgModule({
  declarations: [ExecutiveManagementComponent],
  imports: [CommonModule, ExecutiveManagementRoutingModule]
})
export class ExecutiveManagementModule {}
