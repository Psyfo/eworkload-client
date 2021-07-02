import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeNgModulesModule
  ]
})
export class StudentModule { }
