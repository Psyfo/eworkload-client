import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListStaffSummaryComponent } from './list-staff-summary/list-staff-summary.component';
import { StaffSummaryRoutingModule } from './staff-summary-routing.module';
import { StaffSummaryComponent } from './staff-summary.component';

@NgModule({
    declarations: [ListStaffSummaryComponent, StaffSummaryComponent],
    imports: [CommonModule, StaffSummaryRoutingModule, PrimeNgModulesModule]
})
export class StaffSummaryModule {}
