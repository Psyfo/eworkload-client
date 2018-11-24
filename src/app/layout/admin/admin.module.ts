import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DepartmentComponent } from './department/department.component';
import { FacultyComponent } from './faculty/faculty.component';
import { VenueComponent } from './venue/venue.component';
import { BlockComponent } from './block/block.component';
import { OfferingComponent } from './offering/offering.component';
import { QualificationComponent } from './qualification/qualification.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { ActivityComponent } from './activity/activity.component';
import { TariffComponent } from './tariff/tariff.component';
import { LecturerManageModule } from './lecturer-manage/lecturer-manage.module';
import { PageHeaderModule } from '../../shared';
import { DataTableModule } from 'angular-6-datatable';
import { LecturerManageListComponent } from './lecturer-manager/lecturer-manage-list/lecturer-manage-list.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LecturerManageModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [
      AdminComponent,
      DepartmentComponent,
      FacultyComponent,
      VenueComponent,
      BlockComponent,
      OfferingComponent,
      QualificationComponent,
      EvidenceComponent,
      ActivityComponent,
      TariffComponent,
      LecturerManageListComponent
    ]
})
export class AdminModule { }
