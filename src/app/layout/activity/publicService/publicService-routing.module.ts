import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicServiceComponent } from './publicService.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: PublicServiceComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'add',
                component: AddComponent
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule]
})
export class PublicServiceRoutingModule {}
