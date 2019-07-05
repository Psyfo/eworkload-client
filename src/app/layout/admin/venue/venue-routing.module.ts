import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStategy } from './../../../shared/helpers/routing-strategy';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueDeleteComponent } from './venue-delete/venue-delete.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueViewComponent } from './venue-view/venue-view.component';
import { VenueComponent } from './venue.component';

const routes: Routes = [
    {
        path: '',
        component: VenueComponent,
        children: [
            { path: '', component: VenueListComponent },
            { path: 'add', component: VenueAddComponent },
            { path: 'view/:id', component: VenueViewComponent },
            { path: 'edit/:id', component: VenueEditComponent },
            { path: 'delete/:id', component: VenueDeleteComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy },
    ],
})
export class VenueRoutingModule {}
