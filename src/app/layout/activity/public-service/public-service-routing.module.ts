import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PublicServiceComponent } from './public-service.component';

const routes: Routes = [
    {
        path: '',
        component: PublicServiceComponent,
        children: [
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule]
})
export class PublicServiceRoutingModule {}
