import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffAddComponent } from './staff-add/staff-add.component';

const routes: Routes = [
    {
        path: '', component: StaffComponent, children: [
            {
                path: ':id', component: StaffDetailComponent
            },
            {
                path: ':id/edit', component: StaffEditComponent
            },
            {
                path: 'new', component: StaffAddComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffRoutingModule {
}
