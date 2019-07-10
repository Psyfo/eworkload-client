import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { SharedPipesModule } from '../../shared';

@NgModule({
    declarations: [ReportComponent],
    imports: [CommonModule, ReportRoutingModule, SharedPipesModule]
})
export class ReportModule {}
