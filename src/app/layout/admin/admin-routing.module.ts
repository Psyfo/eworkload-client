import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActivityComponent } from './activity/activity.component';
import { BlockComponent } from './block/block.component';
import { DepartmentComponent } from './department/department.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { FacultyComponent } from './faculty/faculty.component';
import { OfferingComponent } from './offering/offering.component';
import { QualificationComponent } from './qualification/qualification.component';
import { TariffComponent } from './tariff/tariff.component';
import { VenueComponent } from './venue/venue.component';
import { LecturerManageComponent } from './lecturer-manage/lecturer-manage.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'activity', component: ActivityComponent },
            { path: 'block', component: BlockComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'evidence', component: EvidenceComponent },
            { path: 'faculty', component: FacultyComponent },
            { path: 'offering', component: OfferingComponent },
            { path: 'qualification', component: QualificationComponent },
            { path: 'tariff', component: TariffComponent },
            { path: 'venue', component: VenueComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
