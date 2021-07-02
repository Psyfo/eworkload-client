import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VenueRoutingModule } from './venue-routing.module';
import { VenueComponent } from './venue.component';

@NgModule({
    imports: [
        CommonModule,
        VenueRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        VenueComponent
    ]
})
export class VenueModule {}
