import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueDeleteComponent } from './venue-delete/venue-delete.component';
import { VenueViewComponent } from './venue-view/venue-view.component';

const routes: Routes = [
    {
        path: '',
        component: VenueComponent,
        children: [
            { path: '', component: VenueListComponent },
            { path: 'add', component: VenueAddComponent },
            { path: 'view/:id', component: VenueViewComponent },
            { path: 'edit/:id', component: VenueEditComponent },
            { path: 'delete/:id', component: VenueDeleteComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
