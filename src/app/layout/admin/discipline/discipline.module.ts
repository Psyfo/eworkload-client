import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplineRoutingModule } from './discipline-routing.module';
import { DisciplineComponent } from './discipline.component';
import { DisciplineAddComponent } from './discipline-add/discipline-add.component';
import { DisciplineEditComponent } from './discipline-edit/discipline-edit.component';

@NgModule({
  imports: [
    CommonModule,
    DisciplineRoutingModule
  ],
  declarations: [DisciplineComponent, DisciplineAddComponent, DisciplineEditComponent]
})
export class DisciplineModule { }
