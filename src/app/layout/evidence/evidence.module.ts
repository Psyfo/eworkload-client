import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcademicAdministrationEvidenceComponent } from './academic-administration-evidence/academic-administration-evidence.component';
import { EvidenceRoutingModule } from './evidence-routing.module';
import { EvidenceComponent } from './evidence.component';
import { PersonnelDevelopmentEvidenceComponent } from './personnel-development-evidence/personnel-development-evidence.component';
import { ResearchEvidenceComponent } from './research-evidence/research-evidence.component';

@NgModule({
    declarations: [
        EvidenceComponent,
        AcademicAdministrationEvidenceComponent,
        ResearchEvidenceComponent,
        PersonnelDevelopmentEvidenceComponent
    ],
    imports: [CommonModule, EvidenceRoutingModule, PrimeNgModulesModule]
})
export class EvidenceModule {}
