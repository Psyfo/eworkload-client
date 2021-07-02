import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { DutyRoutingModule } from './duty-routing.module';
import { DutyComponent } from './duty.component';


@NgModule({
    declarations: [
        DutyComponent,
    ],
    imports: [CommonModule, DutyRoutingModule, PrimeNgModulesModule]
})
export class DutyModule {}
