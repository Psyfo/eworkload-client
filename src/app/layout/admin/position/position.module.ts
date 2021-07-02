import { PrimeNgModulesModule } from './../../../shared/modules/prime-ng-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';


@NgModule({
  declarations: [PositionComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    PrimeNgModulesModule
  ]
})
export class PositionModule { }
