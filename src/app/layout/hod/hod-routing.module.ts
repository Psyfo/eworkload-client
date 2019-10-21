import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStrategy } from '../../shared/helpers/routing-strategy';
import { HodComponent } from './hod.component';

const routes: Routes = [
    {
        path: '',
        component: HodComponent,
        children: [
            {
                path: 'approvals',
                loadChildren: () =>
                    import('./approvals/approvals.module').then(
                        m => m.ApprovalsModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'lecture-tasks',
                loadChildren: () =>
                    import('./lecture-tasks/lecture-tasks.module').then(
                        m => m.LectureTasksModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'enrollment',
                loadChildren: () =>
                    import('./enrollment/enrollment.module').then(
                        m => m.EnrollmentModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'staff-summary',
                loadChildren: () =>
                    import('./staff-summary/staff-summary.module').then(
                        m => m.StaffSummaryModule
                    ),
                pathMatch: 'prefix'
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
export class HodRoutingModule {}
