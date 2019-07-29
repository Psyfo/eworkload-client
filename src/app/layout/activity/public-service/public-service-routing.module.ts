import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPublicServiceComponent } from './add-public-service/add-public-service.component';
import { EditPublicServiceComponent } from './edit-public-service/edit-public-service.component';
import { ListPublicServiceComponent } from './list-public-service/list-public-service.component';
import { PublicServiceComponent } from './public-service.component';
import { ViewPublicServiceComponent } from './view-public-service/view-public-service.component';

const routes: Routes = [
    {
        path: '',
        component: PublicServiceComponent,
        children: [
            { path: '', component: ListPublicServiceComponent },
            { path: 'add', component: AddPublicServiceComponent },
            { path: 'edit/:id', component: EditPublicServiceComponent },
            { path: 'view/:id', component: ViewPublicServiceComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule]
})
export class PublicServiceRoutingModule {}
