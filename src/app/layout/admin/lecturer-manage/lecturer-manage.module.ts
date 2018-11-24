import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerManageRoutingModule } from './lecturer-manage-routing.module';
import { LecturerManageAddComponent } from './lecturer-manage-add/lecturer-manage-add.component';
import { LecturerManageEditComponent } from './lecturer-manage-edit/lecturer-manage-edit.component';
import { LecturerManageDeleteComponent } from './lecturer-manage-delete/lecturer-manage-delete.component';
import { LecturerManageComponent } from './lecturer-manage.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DataTablesModule } from 'angular-datatables';
import { LecturerManageListComponent } from './lecturer-manage-list/lecturer-manage-list.component';
import { LecturerManageViewComponent } from './lecturer-manage-view/lecturer-manage-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LecturerManageRoutingModule,
    FlashMessagesModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  declarations: [LecturerManageAddComponent, LecturerManageEditComponent, LecturerManageDeleteComponent, LecturerManageComponent, LecturerManageListComponent, LecturerManageViewComponent]
})
export class LecturerManageModule { }
