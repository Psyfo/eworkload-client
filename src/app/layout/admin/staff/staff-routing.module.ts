import { CustomRouteReuseStategy } from './../../../shared/helpers/routing-strategy';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffDeleteComponent } from './staff-delete/staff-delete.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [
    {
        path: '',
        component: StaffComponent,
        children: [
            { path: '', component: StaffListComponent },
            { path: 'add', component: StaffAddComponent },
            { path: 'view/:id', component: StaffViewComponent },
            { path: 'edit/:id', component: StaffEditComponent },
            { path: 'delete/:id', component: StaffDeleteComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy },
    ],
})
export class StaffRoutingModule {}
