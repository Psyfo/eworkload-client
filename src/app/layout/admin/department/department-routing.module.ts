import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentComponent } from './department.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DepartmentComponent,
        children: [
            { path: '', component: DepartmentListComponent },
            { path: 'add', component: DepartmentAddComponent },
            { path: 'view/:id', component: DepartmentViewComponent },
            { path: 'edit/:id', component: DepartmentEditComponent },
            { path: 'delete/:id', component: DepartmentDeleteComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule {}
