import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

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
        PrimeNgModulesModule,
        ReactiveFormsModule
    ]
})
export class LectureTasksModule {}
