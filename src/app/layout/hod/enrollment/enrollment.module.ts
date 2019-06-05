import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EnrollmentComponent } from './enrollment.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../shared';
import { DataTablesModule } from 'angular-datatables';
import { EnrollmentRoutingModule } from './enrollment-routing.module';

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
