import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule
  ],
  declarations: [RoleComponent, RoleViewComponent, RoleAddComponent, RoleEditComponent, RoleListComponent, RoleDeleteComponent]
})
export class RoleModule { }
