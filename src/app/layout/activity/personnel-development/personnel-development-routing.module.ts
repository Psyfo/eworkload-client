import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPersonnelDevelopmentComponent } from './add-personnel-development/add-personnel-development.component';
import { EditPersonnelDevelopmentComponent } from './edit-personnel-development/edit-personnel-development.component';
import { ListPersonnelDevelopmentComponent } from './list-personnel-development/list-personnel-development.component';
import { PersonnelDevelopmentComponent } from './personnel-development.component';
import { ViewPersonnelDevelopmentComponent } from './view-personnel-development/view-personnel-development.component';

const routes: Routes = [
    {
        path: '',
        component: PersonnelDevelopmentComponent,
        children: [
            { path: '', component: ListPersonnelDevelopmentComponent },
            { path: 'add', component: AddPersonnelDevelopmentComponent },
            { path: 'edit/:id', component: EditPersonnelDevelopmentComponent },
            { path: 'view/:id', component: ViewPersonnelDevelopmentComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonnelDevelopmentRoutingModule {}
