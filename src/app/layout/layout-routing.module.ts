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
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                pathMatch: 'prefix',
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule',
                pathMatch: 'prefix',
            },
            {
                path: 'activity',
                loadChildren: './activity/activity.module#ActivityModule',
                pathMatch: 'prefix',
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                pathMatch: 'prefix',
            },
            {
                path: 'hod',
                loadChildren: './hod/hod.module#HodModule',
                pathMatch: 'prefix',
            },
            {
                path: 'report',
                loadChildren: './report/report.module#ReportModule',
                pathMatch: 'prefix',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
