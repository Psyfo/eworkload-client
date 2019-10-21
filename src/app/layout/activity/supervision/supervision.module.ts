import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModulesModule } from '../../../shared/modules/prime-ng-modules.module';
import { AddSupervisionComponent } from './add-supervision/add-supervision.component';
import { EditSupervisionComponent } from './edit-supervision/edit-supervision.component';
import { ListSupervisionComponent } from './list-supervision/list-supervision.component';
import { SupervisionRoutingModule } from './supervision-routing.module';
import { SupervisionComponent } from './supervision.component';
import { ViewSupervisionComponent } from './view-supervision/view-supervision.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
    declarations: [
        SupervisionComponent,
        AddSupervisionComponent,
        ViewSupervisionComponent,
        EditSupervisionComponent,
        ListSupervisionComponent,
        AddStudentComponent
    ],
    imports: [
        CommonModule,
        SupervisionRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ]
})
export class SupervisionModule {}
