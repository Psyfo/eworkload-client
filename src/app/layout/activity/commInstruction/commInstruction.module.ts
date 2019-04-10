import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommInstructionComponent } from './commInstruction.component';
import { CommInstructionRoutingModule } from './comm-instruction-routing.module';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    CommInstructionRoutingModule
  ],
  declarations: [CommInstructionComponent, AddComponent]
})
export class CommInstructionModule { }
