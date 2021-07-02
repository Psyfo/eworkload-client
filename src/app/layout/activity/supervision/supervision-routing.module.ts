import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupervisionComponent } from './supervision.component';

const routes: Routes = [
    {
        path: '',
        component: SupervisionComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupervisionRoutingModule {}
