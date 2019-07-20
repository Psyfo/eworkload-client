import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { CommInstructionModule } from './commInstruction/commInstruction.module';
import { LecturingModule } from './lecturing/lecturing.module';
import { PublicServiceModule } from './publicService/publicService.module';
import { ResearchModule } from './research/research.module';

@NgModule({
    imports: [
        CommonModule,
        ActivityRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        LecturingModule,
        ResearchModule,
        CommInstructionModule,
        PublicServiceModule,
        NgbModule
    ],
    declarations: [ActivityComponent]
})
export class ActivityModule {}
