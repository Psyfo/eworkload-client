import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then(
                        m => m.DashboardModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./profile/profile.module').then(
                        m => m.ProfileModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'activity',
                loadChildren: () =>
                    import('./activity/activity.module').then(
                        m => m.ActivityModule
                    ),
                pathMatch: 'prefix'
            },
            {
                path: 'admin',
                loadChildren: () =>
                    import('./admin/admin.module').then(m => m.AdminModule),
                pathMatch: 'prefix'
            },
            {
                path: 'hod',
                loadChildren: () =>
                    import('./hod/hod.module').then(m => m.HodModule),
                pathMatch: 'prefix'
            },
            {
                path: 'report',
                loadChildren: () =>
                    import('./report/report.module').then(m => m.ReportModule),
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
