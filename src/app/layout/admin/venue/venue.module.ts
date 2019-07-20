import { DataTablesModule } from 'angular-datatables';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VenueAddComponent } from './venue-add/venue-add.component';
import { VenueDeleteComponent } from './venue-delete/venue-delete.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueRoutingModule } from './venue-routing.module';
import { VenueViewComponent } from './venue-view/venue-view.component';
import { VenueComponent } from './venue.component';

@NgModule({
    imports: [
        CommonModule,
        VenueRoutingModule,
        PageHeaderModule,
        DataTablesModule,
        ReactiveFormsModule,
        TableModule,
        PanelModule,
        ButtonModule
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
