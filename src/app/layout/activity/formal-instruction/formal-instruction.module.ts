import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormalInstructionRoutingModule } from './formal-instruction-routing.module';
import { FormalInstructionComponent } from './formal-instruction.component';

@NgModule({
  imports: [
    CommonModule,
    FormalInstructionRoutingModule,
    ReactiveFormsModule,
    PrimeNgModulesModule
  ],
  declarations: [FormalInstructionComponent]
})
export class FormalInstructionModule {}
