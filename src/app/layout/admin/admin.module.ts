import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageHeaderModule } from "../../shared";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DepartmentModule } from "./department/department.module";
import { DisciplineModule } from "./discipline/discipline.module";
import { FacultyModule } from "./faculty/faculty.module";
import { RoleModule } from "./role/role.module";
import { StaffModule } from "./staff/staff.module";
import { VenueModule } from "./venue/venue.module";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        StaffModule,
        VenueModule,
        RoleModule,
        DisciplineModule,
        FacultyModule,
        DepartmentModule,
        PageHeaderModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {}
