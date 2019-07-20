import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment.component';

@NgModule({
    declarations: [
        ListComponent,
        AddComponent,
        EnrollmentComponent,
        EditComponent,
        ViewComponent
    ],
    imports: [
        CommonModule,
        EnrollmentRoutingModule,
        DataTablesModule,
        ReactiveFormsModule,
        PageHeaderModule
    ]
})
export class EnrollmentModule {}
