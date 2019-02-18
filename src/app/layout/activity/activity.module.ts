import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { PageHeaderModule } from '../../shared';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    DataTablesModule,
    NgbModule.forRoot(),
  ],
  declarations: [ActivityComponent, ActivityListComponent, ActivityDetailComponent, ActivityAddComponent]
})
export class ActivityModule { }
