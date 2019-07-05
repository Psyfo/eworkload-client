import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStategy } from './../../../shared/helpers/routing-strategy';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
    {
        path: '',
        component: DepartmentComponent,
        children: [
            { path: '', component: DepartmentListComponent },
            { path: 'add', component: DepartmentAddComponent },
            { path: 'view/:id', component: DepartmentViewComponent },
            { path: 'edit/:id', component: DepartmentEditComponent },
            { path: 'delete/:id', component: DepartmentDeleteComponent },
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
export class DepartmentRoutingModule {}
