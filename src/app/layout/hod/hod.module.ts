import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';
import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HodRoutingModule } from './hod-routing.module';
import { HodComponent } from './hod.component';

@NgModule({
    declarations: [HodComponent],
    imports: [
        CommonModule,
        HodRoutingModule,
        PageHeaderModule,
        PrimeNgModulesModule
    ]
})
export class HodModule {}
