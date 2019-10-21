import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './add-student/add-student.component';
import { AddSupervisionComponent } from './add-supervision/add-supervision.component';
import { EditSupervisionComponent } from './edit-supervision/edit-supervision.component';
import { ListSupervisionComponent } from './list-supervision/list-supervision.component';
import { SupervisionComponent } from './supervision.component';
import { ViewSupervisionComponent } from './view-supervision/view-supervision.component';

const routes: Routes = [
    {
        path: '',
        component: SupervisionComponent,
        children: [
            { path: '', component: ListSupervisionComponent },
            { path: 'add', component: AddSupervisionComponent },
            { path: 'edit/:id', component: EditSupervisionComponent },
            { path: 'view/:id', component: ViewSupervisionComponent },
            { path: 'add-student', component: AddStudentComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupervisionRoutingModule {}
