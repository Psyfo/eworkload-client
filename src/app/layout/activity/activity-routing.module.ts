import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent } from './activity.component';

const routes: Routes = [
    {
        path: '',
        component: ActivityComponent,
        children: [
            {
                path: 'community-instruction',
                loadChildren:
                    './commInstruction/commInstruction.module#CommInstructionModule'
            },
            {
                path: 'lecturing',
                loadChildren: './lecturing/lecturing.module#LecturingModule'
            },
            {
                path: 'public-service',
                loadChildren:
                    './publicService/publicService.module#PublicServiceModule'
            },
            {
                path: 'research',
                loadChildren: './research/research.module#ResearchModule'
            },
            {
                path: 'supervision',
                loadChildren:
                    './supervision/supervision.module#SupervisionModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRoutingModule {}
