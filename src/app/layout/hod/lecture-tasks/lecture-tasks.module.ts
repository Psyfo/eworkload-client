import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureTasksRoutingModule } from './lecture-tasks-routing.module';
import { LectureTasksComponent } from './lecture-tasks.component';
import { PageHeaderModule } from '../../../shared';
import { TasksComponent } from './tasks/tasks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LectureTasksComponent, TasksComponent],
  imports: [
    CommonModule,
    LectureTasksRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ]
})
export class LectureTasksModule { }
