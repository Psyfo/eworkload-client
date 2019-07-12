import { CustomRouteReuseStrategy } from './../../shared/helpers/routing-strategy';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'department',
                loadChildren: () =>
                    import('./department/department.module').then(
                        m => m.DepartmentModule
                    )
            },
            {
                path: 'faculty',
                loadChildren: () =>
                    import('./faculty/faculty.module').then(
                        m => m.FacultyModule
                    )
            },
            {
                path: 'role',
                loadChildren: () =>
                    import('./role/role.module').then(m => m.RoleModule)
            },
            {
                path: 'staff',
                loadChildren: () =>
                    import('./staff/staff.module').then(m => m.StaffModule)
            },
            {
                path: 'venue',
                loadChildren: () =>
                    import('./venue/venue.module').then(m => m.VenueModule)
            },
            {
                path: 'discipline',
                loadChildren: () =>
                    import('./discipline/discipline.module').then(
                        m => m.DisciplineModule
                    )
            },
            {
                path: 'module',
                loadChildren: () =>
                    import('./module/module.module').then(m => m.ModuleModule)
            },
            {
                path: 'qualification',
                loadChildren: () =>
                    import('./qualification/qualification.module').then(
                        m => m.QualificationModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
    ]
})
export class AdminRoutingModule {}
