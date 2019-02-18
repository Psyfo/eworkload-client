import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component';

const routes: Routes = [
    {
        path: '',
        component: RoleComponent,
        children: [
            { path: '', component: RoleListComponent },
            { path: 'add', component: RoleAddComponent },
            { path: 'view/:id', component: RoleViewComponent },
            { path: 'edit/:id', component: RoleEditComponent },
            { path: 'delete/:id', component: RoleDeleteComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
