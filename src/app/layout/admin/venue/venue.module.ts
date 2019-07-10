import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueRoutingModule } from './venue-routing.module';
import { VenueComponent } from './venue.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueDeleteComponent } from './venue-delete/venue-delete.component';
import { VenueViewComponent } from './venue-view/venue-view.component';
import { PageHeaderModule } from '../../../shared';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        CommonModule,
        VenueRoutingModule,
        PageHeaderModule,
        DataTablesModule,
        ReactiveFormsModule,
        TableModule
    ],
    declarations: [
        VenueComponent,
        VenueListComponent,
        VenueEditComponent,
        VenueAddComponent,
        VenueDeleteComponent,
        VenueViewComponent
    ]
})
export class VenueModule {}
