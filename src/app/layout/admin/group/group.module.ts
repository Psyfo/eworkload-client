import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    PrimeNgModulesModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule {}
