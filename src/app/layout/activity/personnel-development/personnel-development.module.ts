import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';

import { PersonnelDevelopmentRoutingModule } from './personnel-development-routing.module';
import { PersonnelDevelopmentComponent } from './personnel-development.component';

@NgModule({
    declarations: [
        PersonnelDevelopmentComponent
    ],
    imports: [
        CommonModule,
        PersonnelDevelopmentRoutingModule,
        PrimeNgModulesModule
    ]
})
export class PersonnelDevelopmentModule {}
