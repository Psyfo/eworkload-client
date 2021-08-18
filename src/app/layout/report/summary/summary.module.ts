import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModulesModule
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule { }
