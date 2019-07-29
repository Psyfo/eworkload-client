import { DataTablesModule } from 'angular-datatables';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AcademicAdministrationModule } from './academic-administration/academic-administration.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { CommunityInstructionModule } from './community-instruction/community-instruction.module';
import { ExecutiveManagementModule } from './executive-management/executive-management.module';
import { FormalInstructionModule } from './formal-instruction/formal-instruction.module';
import { PersonnelDevelopmentModule } from './personnel-development/personnel-development.module';
import { PublicServiceModule } from './public-service/public-service.module';
import { ResearchModule } from './research/research.module';
import { SupervisionModule } from './supervision/supervision.module';

@NgModule({
    imports: [
        AcademicAdministrationModule,
        ActivityRoutingModule,
        CommonModule,
        CommunityInstructionModule,
        DataTablesModule,
        ExecutiveManagementModule,
        FormalInstructionModule,
        PersonnelDevelopmentModule,
        PrimeNgModulesModule,
        PublicServiceModule,
        ReactiveFormsModule,
        ResearchModule,
        SupervisionModule
    ],
    declarations: [ActivityComponent]
})
export class ActivityModule {}
