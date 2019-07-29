import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditApprovalsComponent } from './edit-approvals/edit-approvals.component';
import { ListApprovalsComponent } from './list-approvals/list-approvals.component';
import { ViewApprovalsComponent } from './view-approvals/view-approvals.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: ListApprovalsComponent
            },
            {
                path: 'view/:id',
                component: ViewApprovalsComponent
            },
            {
                path: 'edit/:id',
                component: EditApprovalsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApprovalsRoutingModule {}
