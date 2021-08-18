import { SummaryComponent } from './summary/summary.component';
import { HemisBalancedComponent } from './hemis-balanced/hemis-balanced.component';
import { HemisHistoricalComponent } from './hemis-historical/hemis-historical.component';
import { ReportComponent } from './report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
