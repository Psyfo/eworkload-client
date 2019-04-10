import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { PageHeaderModule } from '../../shared';
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
    FlashMessagesModule,
    DataTablesModule,
    LecturingModule,
    ResearchModule,
    CommInstructionModule,
    PublicServiceModule,
    NgbModule.forRoot(),
  ],
  declarations: [ActivityComponent]
})
export class ActivityModule { }
