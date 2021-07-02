import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommunityInstructionRoutingModule } from './community-instruction-routing.module';
import { CommunityInstructionComponent } from './community-instruction.component';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

@NgModule({
    imports: [
        CommonModule,
        CommunityInstructionRoutingModule,
        PrimeNgModulesModule
    ],
    declarations: [
        CommunityInstructionComponent
    ]
})
export class CommunityInstructionModule {}
