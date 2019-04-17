import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodComponent } from './hod.component';

const routes: Routes = [
    {
        path: '',
        component: HodComponent,
        children: [
            {
                path: 'approvals',
                loadChildren: './approvals/approvals.module#ApprovalsModule',
                pathMatch: 'prefix'
            },
            {
                path: 'lecture-tasks',
                loadChildren:
                    './lecture-tasks/lecture-tasks.module#LectureTasksModule',
                    pathMatch: 'prefix'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HodRoutingModule {}
