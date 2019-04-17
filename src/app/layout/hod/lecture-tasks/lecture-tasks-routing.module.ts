import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { LectureTasksComponent } from './lecture-tasks.component';

const routes: Routes = [
    {
        path: '', component: LectureTasksComponent, children: [
            {
                path: '', redirectTo: 'tasks', pathMatch: 'prefix'
            },
            {
                path: 'tasks', component: TasksComponent, pathMatch: 'prefix'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureTasksRoutingModule { }
