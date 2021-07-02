import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [CommonModule, BlockRoutingModule, PrimeNgModulesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlockModule {}
