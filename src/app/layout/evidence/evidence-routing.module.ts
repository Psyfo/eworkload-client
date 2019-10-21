import { ResearchEvidenceComponent } from './research-evidence/research-evidence.component';
import { PersonnelDevelopmentEvidenceComponent } from './personnel-development-evidence/personnel-development-evidence.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvidenceComponent } from './evidence.component';
import { AcademicAdministrationEvidenceComponent } from './academic-administration-evidence/academic-administration-evidence.component';

const routes: Routes = [
    {
        path: '',
        component: EvidenceComponent,
        children: [
            {
                path: 'academic-administration',
                component: AcademicAdministrationEvidenceComponent
            },
            {
                path: 'personnel-development',
                component: PersonnelDevelopmentEvidenceComponent
            },
            {
                path: 'research',
                component: ResearchEvidenceComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvidenceRoutingModule {}
