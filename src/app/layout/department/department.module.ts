import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, DepartmentRoutingModule, PageHeaderModule],
    declarations: [DepartmentComponent]
})
export class DepartmentModule {}
