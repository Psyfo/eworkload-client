import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { PageHeaderModule } from '../../shared';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffAddComponent } from './staff-add/staff-add.component';

@NgModule({
    imports: [CommonModule, StaffRoutingModule, PageHeaderModule],
    declarations: [StaffComponent, StaffDetailComponent, StaffEditComponent, StaffAddComponent]
})
export class StaffModule {}
