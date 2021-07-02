import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';

@NgModule({
    imports: [
        CommonModule,
        ResearchRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        ResearchComponent
    ]
})
export class ResearchModule {}
