import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';

const routes: Routes = [
    {
        path: '', component: ActivityComponent, children: [
            { path: '', component: ActivityListComponent },
            { path: 'detail', component: ActivityDetailComponent},
            { path: 'add', component: ActivityAddComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
