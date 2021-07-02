import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentComponent } from './department.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DepartmentRoutingModule {}
