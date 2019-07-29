import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferingTypeRoutingModule } from './offering-type-routing.module';
import { OfferingTypeComponent } from './offering-type.component';


@NgModule({
  declarations: [OfferingTypeComponent],
  imports: [
    CommonModule,
    OfferingTypeRoutingModule
  ]
})
export class OfferingTypeModule { }
