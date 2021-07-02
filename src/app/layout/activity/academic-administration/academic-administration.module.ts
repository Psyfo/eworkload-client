import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcademicAdministrationRoutingModule } from './academic-administration-routing.module';
import { AcademicAdministrationComponent } from './academic-administration.component';

@NgModule({
  declarations: [AcademicAdministrationComponent],
  imports: [
    CommonModule,
    AcademicAdministrationRoutingModule,
    PrimeNgModulesModule
  ]
})
export class AcademicAdministrationModule {}
