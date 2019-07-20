import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
    declarations: [ReportComponent],
    imports: [CommonModule, ReportRoutingModule, SharedPipesModule]
})
export class ReportModule {}
