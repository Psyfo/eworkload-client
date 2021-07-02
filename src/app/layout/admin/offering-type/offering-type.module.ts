import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OfferingTypeRoutingModule } from './offering-type-routing.module';
import { OfferingTypeComponent } from './offering-type.component';

@NgModule({
  declarations: [OfferingTypeComponent],
  imports: [CommonModule, OfferingTypeRoutingModule, PrimeNgModulesModule]
})
export class OfferingTypeModule {}
