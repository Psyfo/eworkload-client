import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDutyComponent } from './add-duty/add-duty.component';
import { DutyComponent } from './duty.component';
import { EditDutyComponent } from './edit-duty/edit-duty.component';
import { ListDutyComponent } from './list-duty/list-duty.component';
import { ViewDutyComponent } from './view-duty/view-duty.component';

const routes: Routes = [
    {
        path: '',
        component: DutyComponent,
        children: [
            { path: '', component: ListDutyComponent },
            { path: 'add', component: AddDutyComponent },
            { path: 'view/:id', component: ViewDutyComponent },
            { path: 'edit/:id', component: EditDutyComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DutyRoutingModule {}
