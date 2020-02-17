import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GroupingComponent } from './grouping/grouping.component';
import { ManageModulesRoutingModule } from './manage-modules-routing.module';
import { ModuleEnrollmentsComponent } from './module-enrollments/module-enrollments.component';
import { StackModulesComponent } from './stacking/stack-modules/stack-modules.component';
import { StackingComponent } from './stacking/stacking.component';
import { StacksComponent } from './stacking/stacks/stacks.component';

@NgModule({
  declarations: [
    StackModulesComponent,
    ModuleEnrollmentsComponent,
    StackingComponent,
    GroupingComponent,
    StacksComponent
  ],
  imports: [CommonModule, ManageModulesRoutingModule, PrimeNgModulesModule],
  exports: [StackModulesComponent, ModuleEnrollmentsComponent, StackingComponent, GroupingComponent, StacksComponent]
})
export class ManageModulesModule {}
