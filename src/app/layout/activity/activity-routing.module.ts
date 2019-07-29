import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent } from './activity.component';

const routes: Routes = [
    {
        path: '',
        component: ActivityComponent,
        children: [
            {
                path: 'academic-administration',
                loadChildren: () =>
                    import(
                        './academic-administration/academic-administration.module'
                    ).then(m => m.AcademicAdministrationModule)
            },
            {
                path: 'community-instruction',
                loadChildren: () =>
                    import(
                        './community-instruction/community-instruction.module'
                    ).then(m => m.CommunityInstructionModule)
            },
            {
                path: 'executive-management',
                loadChildren: () =>
                    import(
                        './executive-management/executive-management.module'
                    ).then(m => m.ExecutiveManagementModule)
            },
            {
                path: 'formal-instruction',
                loadChildren: () =>
                    import(
                        './formal-instruction/formal-instruction.module'
                    ).then(m => m.FormalInstructionModule)
            },
            {
                path: 'personnel-development',
                loadChildren: () =>
                    import(
                        './personnel-development/personnel-development.module'
                    ).then(m => m.PersonnelDevelopmentModule)
            },
            {
                path: 'public-service',
                loadChildren: () =>
                    import('./public-service/public-service.module').then(
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
