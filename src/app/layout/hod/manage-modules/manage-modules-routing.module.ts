import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageModulesComponent } from './manage-modules.component';

const routes: Routes = [
  {
    path: '',
    component: ManageModulesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageModulesRoutingModule {}
