import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademicAdministrationComponent } from './academic-administration.component';


const routes: Routes = [
    {
        path: '',
        component: AcademicAdministrationComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcademicAdministrationRoutingModule {}
