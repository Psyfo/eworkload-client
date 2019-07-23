import { PageHeaderModule } from 'src/app/shared/modules/page-header/page-header.module';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffDeleteComponent } from './staff-delete/staff-delete.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffViewComponent } from './staff-view/staff-view.component';
import { StaffComponent } from './staff.component';

@NgModule({
    imports: [
        CommonModule,
        StaffRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        StaffComponent,
        StaffListComponent,
        StaffAddComponent,
        StaffEditComponent,
        StaffViewComponent,
        StaffDeleteComponent
    ]
})
export class StaffModule {}
