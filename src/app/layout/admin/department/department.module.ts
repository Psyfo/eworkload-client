import { DataTablesModule } from 'angular-datatables';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { DepartmentComponent } from './department.component';

@NgModule({
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
    declarations: [
        DepartmentComponent,
        DepartmentAddComponent,
        DepartmentEditComponent,
        DepartmentViewComponent,
        DepartmentListComponent
    ]
})
export class DepartmentModule {}
