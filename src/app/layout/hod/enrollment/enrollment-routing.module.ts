import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrollmentComponent } from './enrollment.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: EnrollmentComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddComponent },
            { path: 'view/:id', component: ViewComponent },
            { path: 'edit/:id', component: EditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnrollmentRoutingModule {}
