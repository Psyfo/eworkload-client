import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HodRoutingModule } from './hod-routing.module';
import { HodComponent } from './hod.component';

@NgModule({
    declarations: [HodComponent],
    imports: [CommonModule, HodRoutingModule, PageHeaderModule]
})
export class HodModule {}
