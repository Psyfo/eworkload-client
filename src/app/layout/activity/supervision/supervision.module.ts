import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { SupervisionRoutingModule } from './supervision-routing.module';
import { SupervisionComponent } from './supervision.component';

@NgModule({
    declarations: [
        SupervisionComponent
    ],
    imports: [
        CommonModule,
        SupervisionRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ]
})
export class SupervisionModule {}
