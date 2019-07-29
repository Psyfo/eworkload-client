import { CustomRouteReuseStrategy } from 'src/app/shared/helpers';

import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'block',
                loadChildren: () =>
                    import('./block/block.module').then(m => m.BlockModule)
            },
            {
                path: 'department',
                loadChildren: () =>
                    import('./department/department.module').then(
                        m => m.DepartmentModule
                    )
            },
            {
                path: 'discipline',
                loadChildren: () =>
                    import('./discipline/discipline.module').then(
                        m => m.DisciplineModule
                    )
            },
            {
                path: 'duty',
                loadChildren: () =>
                    import('./duty/duty.module').then(m => m.DutyModule)
            },
            {
                path: 'enrollment',
                loadChildren: () =>
                    import('./enrollment/enrollment.module').then(
                        m => m.EnrollmentModule
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
                path: 'module',
                loadChildren: () =>
                    import('./module/module.module').then(m => m.ModuleModule)
            },
            {
                path: 'offering-type',
                loadChildren: () =>
                    import('./offering-type/offering-type.module').then(
                        m => m.OfferingTypeModule
                    )
            },
            {
                path: 'position',
                loadChildren: () =>
                    import('./position/position.module').then(
                        m => m.PositionModule
                    )
            },
            {
                path: 'qualification',
                loadChildren: () =>
                    import('./qualification/qualification.module').then(
                        m => m.QualificationModule
                    )
            },
            {
                path: 'student',
                loadChildren: () =>
                    import('./student/student.module').then(
                        m => m.StudentModule
                    )
            },
            {
                path: 'user',
                loadChildren: () =>
                    import('./user/user.module').then(m => m.UserModule)
            },
            {
                path: 'venue',
                loadChildren: () =>
                    import('./venue/venue.module').then(m => m.VenueModule)
            },
            {
                path: 'work-focus',
                loadChildren: () =>
                    import('./work-focus/work-focus.module').then(
                        m => m.WorkFocusModule
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
