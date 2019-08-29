import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../shared/modules/prime-ng-modules.module';
import { HemisBalancedComponent } from './hemis-balanced/hemis-balanced.component';
import { HemisHistoricalComponent } from './hemis-historical/hemis-historical.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
    declarations: [
        ReportComponent,
        HemisHistoricalComponent,
        HemisBalancedComponent
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        SharedPipesModule,
        PrimeNgModulesModule
    ]
})
export class ReportModule {}
