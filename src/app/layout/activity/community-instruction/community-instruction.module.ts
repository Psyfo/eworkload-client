import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCommunityInstructionComponent } from './add-community-instruction/add-community-instruction.component';
import { CommunityInstructionRoutingModule } from './community-instruction-routing.module';
import { CommunityInstructionComponent } from './community-instruction.component';
import { EditCommunityInstructionComponent } from './edit-community-instruction/edit-community-instruction.component';
import { ListCommunityInstructionComponent } from './list-community-instruction/list-community-instruction.component';
import { ViewCommunityInstructionComponent } from './view-community-instruction/view-community-instruction.component';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

@NgModule({
    imports: [
        CommonModule,
        CommunityInstructionRoutingModule,
        PrimeNgModulesModule
    ],
    declarations: [
        CommunityInstructionComponent,
        AddCommunityInstructionComponent,
        ViewCommunityInstructionComponent,
        EditCommunityInstructionComponent,
        ListCommunityInstructionComponent
    ]
})
export class CommunityInstructionModule {}
