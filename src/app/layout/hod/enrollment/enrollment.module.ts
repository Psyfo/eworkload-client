import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEnrollmentComponent } from './add-enrollment/add-enrollment.component';
import { EditEnrollmentComponent } from './edit-enrollment/edit-enrollment.component';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment.component';
import { ListEnrollmentComponent } from './list-enrollment/list-enrollment.component';
import { ViewEnrollmentComponent } from './view-enrollment/view-enrollment.component';

@NgModule({
    declarations: [
        ListEnrollmentComponent,
        AddEnrollmentComponent,
        EnrollmentComponent,
        EditEnrollmentComponent,
        ViewEnrollmentComponent
    ],
    imports: [
        CommonModule,
        EnrollmentRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ]
})
export class EnrollmentModule {}
