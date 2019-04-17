import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'department',
                loadChildren: './department/department.module#DepartmentModule'
            },
            {
                path: 'faculty',
                loadChildren: './faculty/faculty.module#FacultyModule'
            },
            {
                path: 'role',
                loadChildren: './role/role.module#RoleModule'
            },
            {
                path: 'staff',
                loadChildren: './staff/staff.module#StaffModule'
            },
            {
                path: 'venue',
                loadChildren: './venue/venue.module#VenueModule'
            },
            {
                path: 'discipline',
                loadChildren: './discipline/discipline.module#DisciplineModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
