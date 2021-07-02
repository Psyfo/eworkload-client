import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExecutiveManagementComponent } from './executive-management.component';

const routes: Routes = [
  {
    path: '',
    component: ExecutiveManagementComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutiveManagementRoutingModule {}
