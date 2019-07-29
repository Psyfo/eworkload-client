import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddFormalInstructionComponent } from './add-formal-instruction/add-formal-instruction.component';
import { EditFormalInstructionComponent } from './edit-formal-instruction/edit-formal-instruction.component';
import { FormalInstructionRoutingModule } from './formal-instruction-routing.module';
import { FormalInstructionComponent } from './formal-instruction.component';
import { ListFormalInstructionComponent } from './list-formal-instruction/list-formal-instruction.component';
import { ViewFormalInstructionComponent } from './view-formal-instruction/view-formal-instruction.component';

@NgModule({
    imports: [
        CommonModule,
        FormalInstructionRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        FormalInstructionComponent,
        AddFormalInstructionComponent,
        ViewFormalInstructionComponent,
        ListFormalInstructionComponent,
        EditFormalInstructionComponent
    ]
})
export class FormalInstructionModule {}
