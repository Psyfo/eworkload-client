import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { AddDutyComponent } from './add-duty/add-duty.component';
import { DutyRoutingModule } from './duty-routing.module';
import { DutyComponent } from './duty.component';
import { EditDutyComponent } from './edit-duty/edit-duty.component';
import { ListDutyComponent } from './list-duty/list-duty.component';
import { ViewDutyComponent } from './view-duty/view-duty.component';

@NgModule({
    declarations: [
        DutyComponent,
        AddDutyComponent,
        EditDutyComponent,
        ViewDutyComponent,
        ListDutyComponent
    ],
    imports: [CommonModule, DutyRoutingModule, PrimeNgModulesModule]
})
export class DutyModule {}
