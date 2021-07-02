import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { VenueComponent } from './venue.component';

const routes: Routes = [
    {
        path: '',
        component: VenueComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        
    ]
})
export class VenueRoutingModule {}
