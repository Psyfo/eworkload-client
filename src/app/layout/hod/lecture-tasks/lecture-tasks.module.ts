import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LectureTasksRoutingModule } from './lecture-tasks-routing.module';
import { LectureTasksComponent } from './lecture-tasks.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [LectureTasksComponent, TasksComponent],
    imports: [
        CommonModule,
        LectureTasksRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule
    ]
})
export class LectureTasksModule {}
