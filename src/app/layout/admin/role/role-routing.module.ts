import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStategy } from './../../../shared/helpers/routing-strategy';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleComponent } from './role.component';

const routes: Routes = [
    {
        path: '',
        component: RoleComponent,
        children: [
            { path: '', component: RoleListComponent },
            { path: 'add', component: RoleAddComponent },
            { path: 'view/:id', component: RoleViewComponent },
            { path: 'edit/:id', component: RoleEditComponent },
            { path: 'delete/:id', component: RoleDeleteComponent },
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
export class RoleRoutingModule {}
