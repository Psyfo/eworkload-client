import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupingComponent } from '../../hod/manage-modules/grouping/grouping.component';

const routes: Routes = [
  {
    path: '',
    component: GroupingComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
