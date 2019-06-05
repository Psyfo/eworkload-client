import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { PageHeaderModule } from './../../../shared/modules/page-header/page-header.module';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyViewComponent } from './faculty-view/faculty-view.component';
import { FacultyComponent } from './faculty.component';

@NgModule({
    imports: [
        CommonModule,
        FacultyRoutingModule,
        PageHeaderModule,
        DataTablesModule,
        ReactiveFormsModule
    ],
    declarations: [
        FacultyComponent,
        FacultyAddComponent,
        FacultyEditComponent,
        FacultyViewComponent,
        FacultyListComponent,
        FacultyDeleteComponent
    ]
})
export class FacultyModule {}
