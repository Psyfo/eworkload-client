import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment.component';
import { AddEnrollmentComponent } from './add-enrollment/add-enrollment.component';
import { EditEnrollmentComponent } from './edit-enrollment/edit-enrollment.component';
import { ListEnrollmentComponent } from './list-enrollment/list-enrollment.component';
import { ViewEnrollmentComponent } from './view-enrollment/view-enrollment.component';

@NgModule({
    declarations: [
        EnrollmentComponent,
        AddEnrollmentComponent,
        EditEnrollmentComponent,
        ListEnrollmentComponent,
        ViewEnrollmentComponent
    ],
    imports: [CommonModule, EnrollmentRoutingModule]
})
export class EnrollmentModule {}
