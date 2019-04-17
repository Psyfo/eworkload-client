import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SupervisionComponent } from './supervision.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: "",
        component: SupervisionComponent,
        children: [
            { path: "", component: ListComponent },
            { path: "view/:id", component: ViewComponent },
            { path: "add", component: AddComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisionRoutingModule { }
