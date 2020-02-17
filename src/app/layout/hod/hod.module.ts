import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HodRoutingModule } from './hod-routing.module';
import { HodComponent } from './hod.component';
import { ManageModulesComponent } from './manage-modules/manage-modules.component';
import { ManageModulesModule } from './manage-modules/manage-modules.module';
import { StaffSummaryComponent } from './staff-summary/staff-summary.component';

@NgModule({
    declarations: [HodComponent, ManageModulesComponent],
    imports: [
        CommonModule,
        HodRoutingModule,
        PageHeaderModule,
        ManageModulesModule,
        PrimeNgModulesModule
    ]
})
export class HodModule {}
