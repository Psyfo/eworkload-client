import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

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
                path: 'enrollment',
                loadChildren: () =>
                    import('./enrollment/enrollment.module').then(
                        m => m.EnrollmentModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'manage-modules',
                loadChildren: () =>
                    import('./manage-modules/manage-modules.module').then(
                        m => m.ManageModulesModule
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
        
    ]
})
export class HodRoutingModule {}
