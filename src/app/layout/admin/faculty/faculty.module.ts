import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyViewComponent } from './faculty-view/faculty-view.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FacultyRoutingModule,
    PageHeaderModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  declarations: [FacultyComponent, FacultyAddComponent, FacultyEditComponent, FacultyViewComponent, FacultyListComponent, FacultyDeleteComponent]
})
export class FacultyModule { }
