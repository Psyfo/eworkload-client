import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BlockModule } from './block/block.module';
import { DepartmentModule } from './department/department.module';
import { DisciplineModule } from './discipline/discipline.module';
import { DutyModule } from './duty/duty.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { FacultyModule } from './faculty/faculty.module';
import { ModuleModule } from './module/module.module';
import { OfferingTypeModule } from './offering-type/offering-type.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { VenueModule } from './venue/venue.module';
import { WorkFocusModule } from './work-focus/work-focus.module';

@NgModule({
    imports: [
        AdminRoutingModule,
        BlockModule,
        CommonModule,
        DepartmentModule,
        DisciplineModule,
        DutyModule,
        EnrollmentModule,
        FacultyModule,
        ModuleModule,
        OfferingTypeModule,
        PageHeaderModule,
        StudentModule,
        UserModule,
        VenueModule,
        WorkFocusModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {}
