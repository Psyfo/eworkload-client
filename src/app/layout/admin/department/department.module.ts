import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  declarations: [DepartmentComponent, DepartmentAddComponent, DepartmentEditComponent, DepartmentViewComponent, DepartmentListComponent, DepartmentDeleteComponent]
})
export class DepartmentModule { }
