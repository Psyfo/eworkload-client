import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LecturingComponent } from './lecturing.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: LecturingComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddComponent },
            { path: 'view/:id', component: ViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LecturingRoutingModule {}
