import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupComponent } from './group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroupRoutingModule {}
