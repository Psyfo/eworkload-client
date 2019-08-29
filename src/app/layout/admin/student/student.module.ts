import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [StudentComponent, AddStudentComponent, ListStudentComponent, ViewStudentComponent, EditStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeNgModulesModule
  ]
})
export class StudentModule { }
