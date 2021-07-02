import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PersonnelDevelopmentComponent } from './personnel-development.component';

const routes: Routes = [
    {
        path: '',
        component: PersonnelDevelopmentComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonnelDevelopmentRoutingModule {}
