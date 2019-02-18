import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LecturerManageModule } from './lecturer-manage/lecturer-manage.module';
import { PageHeaderModule } from '../../shared';
import { VenueModule } from './venue/venue.module';
import { RoleModule } from './role/role.module';
import { DisciplineModule } from './discipline/discipline.module';
import { FacultyModule } from './faculty/faculty.module';
import { DepartmentModule } from './department/department.module';
//import { LecturerManageListComponent } from './lecturer-manager/lecturer-manage-list/lecturer-manage-list.component';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        LecturerManageModule,
        VenueModule,
        RoleModule,
        DisciplineModule,
        FacultyModule,
        DepartmentModule,
        PageHeaderModule
    ],
    declarations: [
        AdminComponent,
    ]
})
export class AdminModule { }
