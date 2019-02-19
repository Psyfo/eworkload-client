import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'activity', loadChildren: './activity/activity.module#ActivityModule' },
            { path: 'block', loadChildren: './block/block.module#BlockModule' },
            { path: 'lecturer', loadChildren: './lecturer/lecturer.module#LecturerModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'lecturer-manage', loadChildren: './admin/lecturer-manage/lecturer-manage.module#LecturerManageModule' },
            { path: 'role', loadChildren: './admin/role/role.module#RoleModule' },
            { path: 'venue', loadChildren: './admin/venue/venue.module#VenueModule' },
            { path: 'faculty', loadChildren: './admin/faculty/faculty.module#FacultyModule' },
            { path: 'department', loadChildren: './admin/department/department.module#DepartmentModule' },



        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
