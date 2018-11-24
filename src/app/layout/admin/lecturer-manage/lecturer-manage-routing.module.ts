import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerManageComponent } from './lecturer-manage.component';
import { LecturerManageAddComponent } from './lecturer-manage-add/lecturer-manage-add.component';
import { LecturerManageEditComponent } from './lecturer-manage-edit/lecturer-manage-edit.component';
import { LecturerManageDeleteComponent } from './lecturer-manage-delete/lecturer-manage-delete.component';
import { LecturerManageListComponent } from './lecturer-manage-list/lecturer-manage-list.component';
import { LecturerManageViewComponent } from './lecturer-manage-view/lecturer-manage-view.component';

const routes: Routes = [
    {
        path: '',
        component: LecturerManageComponent,
        children: [
            { path: '', component: LecturerManageListComponent },
            { path: 'add', component: LecturerManageAddComponent },
            { path: 'view/:id', component: LecturerManageViewComponent },
            { path: 'edit/:id', component: LecturerManageEditComponent },
            { path: 'delete/:id', component: LecturerManageDeleteComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LecturerManageRoutingModule { }
