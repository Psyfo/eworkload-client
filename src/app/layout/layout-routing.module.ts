import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                pathMatch: 'prefix'
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule',
                pathMatch: 'prefix'
            },
            {
                path: 'activity',
                loadChildren: './activity/activity.module#ActivityModule',
                pathMatch: 'prefix'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                pathMatch: 'prefix'
            },
            {
                path: 'department',
                loadChildren:
                    './admin/department/department.module#DepartmentModule',
                pathMatch: 'prefix'
            },
            {
                path: 'faculty',
                loadChildren: './admin/faculty/faculty.module#FacultyModule',
                pathMatch: 'prefix'
            },
            {
                path: 'role',
                loadChildren: './admin/role/role.module#RoleModule',
                pathMatch: 'prefix'
            },
            {
                path: 'staff',
                loadChildren: './admin/staff/staff.module#StaffModule',
                pathMatch: 'prefix'
            },
            {
                path: 'venue',
                loadChildren: './admin/venue/venue.module#VenueModule',
                pathMatch: 'prefix'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
