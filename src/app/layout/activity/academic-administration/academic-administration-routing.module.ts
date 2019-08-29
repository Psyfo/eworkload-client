import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademicAdministrationComponent } from './academic-administration.component';
import { AddAcademicAdministrationComponent } from './add-academic-administration/add-academic-administration.component';
import { EditAcademicAdministrationComponent } from './edit-academic-administration/edit-academic-administration.component';
import { ListAcademicAdministrationComponent } from './list-academic-administration/list-academic-administration.component';
import { ViewAcademicAdministrationComponent } from './view-academic-administration/view-academic-administration.component';

const routes: Routes = [
    {
        path: '',
        component: AcademicAdministrationComponent,
        children: [
            { path: '', component: ListAcademicAdministrationComponent },
            { path: 'add', component: AddAcademicAdministrationComponent },
            {
                path: 'edit/:id',
                component: EditAcademicAdministrationComponent
            },
            { path: 'view/:id', component: ViewAcademicAdministrationComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcademicAdministrationRoutingModule {}
