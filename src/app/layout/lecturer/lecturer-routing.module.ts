import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer.component';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';
import { LecturerEditComponent } from './lecturer-edit/lecturer-edit.component';
import { LecturerAddComponent } from './lecturer-add/lecturer-add.component';
import { LecturerViewComponent } from './lecturer-view/lecturer-view.component';

const routes: Routes = [
    {
        path: '', component: LecturerComponent, children: [
            { path: '', component: LecturerListComponent },
            { path: 'edit', component: LecturerEditComponent },
            { path: 'add', component: LecturerAddComponent },
            { path: 'view', component: LecturerViewComponent }
        ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
