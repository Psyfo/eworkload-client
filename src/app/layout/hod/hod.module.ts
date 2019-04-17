import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HodComponent } from './hod.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [HodComponent],
  imports: [
    CommonModule,
    HodRoutingModule,
    PageHeaderModule
  ]
})
export class HodModule { }
