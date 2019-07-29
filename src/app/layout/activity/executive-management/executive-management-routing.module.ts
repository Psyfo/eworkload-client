import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddExecutiveManagementComponent } from './add-executive-management/add-executive-management.component';
import { EditExecutiveManagementComponent } from './edit-executive-management/edit-executive-management.component';
import { ExecutiveManagementComponent } from './executive-management.component';
import { ListExecutiveManagementComponent } from './list-executive-management/list-executive-management.component';
import { ViewExecutiveManagementComponent } from './view-executive-management/view-executive-management.component';

const routes: Routes = [
    {
        path: '',
        component: ExecutiveManagementComponent,
        children: [
            { path: '', component: ListExecutiveManagementComponent },
            { path: 'add', component: AddExecutiveManagementComponent },
            { path: 'edit/:id', component: EditExecutiveManagementComponent },
            { path: 'view/:id', component: ViewExecutiveManagementComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExecutiveManagementRoutingModule {}
