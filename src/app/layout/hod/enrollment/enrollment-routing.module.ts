import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEnrollmentComponent } from './add-enrollment/add-enrollment.component';
import { EditEnrollmentComponent } from './edit-enrollment/edit-enrollment.component';
import { EnrollmentComponent } from './enrollment.component';
import { ListEnrollmentComponent } from './list-enrollment/list-enrollment.component';
import { ViewEnrollmentComponent } from './view-enrollment/view-enrollment.component';

const routes: Routes = [
    {
        path: '',
        component: EnrollmentComponent,
        children: [
            { path: '', component: ListEnrollmentComponent },
            { path: 'add', component: AddEnrollmentComponent },
            { path: 'view/:id', component: ViewEnrollmentComponent },
            { path: 'edit/:id', component: EditEnrollmentComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnrollmentRoutingModule {}
