import { PrimeNgModulesModule } from './../../../shared/modules/prime-ng-modules.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ModerationRoutingModule } from './moderation-routing.module';
import { ModerationComponent } from './moderation.component';

@NgModule({
    declarations: [
        ModerationComponent
    ],
    imports: [CommonModule, ModerationRoutingModule, PrimeNgModulesModule]
})
export class ModerationModule {}
