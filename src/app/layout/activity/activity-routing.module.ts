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
                loadChildren: () =>
                    import('./commInstruction/commInstruction.module').then(
                        m => m.CommInstructionModule
                    )
            },
            {
                path: 'lecturing',
                loadChildren: () =>
                    import('./lecturing/lecturing.module').then(
                        m => m.LecturingModule
                    )
            },
            {
                path: 'public-service',
                loadChildren: () =>
                    import('./publicService/publicService.module').then(
                        m => m.PublicServiceModule
                    )
            },
            {
                path: 'research',
                loadChildren: () =>
                    import('./research/research.module').then(
                        m => m.ResearchModule
                    )
            },
            {
                path: 'supervision',
                loadChildren: () =>
                    import('./supervision/supervision.module').then(
                        m => m.SupervisionModule
                    )
            },
            {
                path: 'moderation',
                loadChildren: () =>
                    import('./moderation/moderation.module').then(
                        m => m.ModerationModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRoutingModule {}
