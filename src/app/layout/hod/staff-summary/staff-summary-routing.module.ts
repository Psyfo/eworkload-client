import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListStaffSummaryComponent } from './list-staff-summary/list-staff-summary.component';
import { StaffSummaryComponent } from './staff-summary.component';

const routes: Routes = [
    {
        path: '',
        component: StaffSummaryComponent,
        children: [{ path: '', component: ListStaffSummaryComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffSummaryRoutingModule {}
