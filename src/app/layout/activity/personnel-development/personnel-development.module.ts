import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddPersonnelDevelopmentComponent } from './add-personnel-development/add-personnel-development.component';
import { EditPersonnelDevelopmentComponent } from './edit-personnel-development/edit-personnel-development.component';
import { ListPersonnelDevelopmentComponent } from './list-personnel-development/list-personnel-development.component';
import { PersonnelDevelopmentRoutingModule } from './personnel-development-routing.module';
import { PersonnelDevelopmentComponent } from './personnel-development.component';
import { ViewPersonnelDevelopmentComponent } from './view-personnel-development/view-personnel-development.component';

@NgModule({
    declarations: [
        AddPersonnelDevelopmentComponent,
        EditPersonnelDevelopmentComponent,
        ListPersonnelDevelopmentComponent,
        ViewPersonnelDevelopmentComponent,
        PersonnelDevelopmentComponent
    ],
    imports: [CommonModule, PersonnelDevelopmentRoutingModule]
})
export class PersonnelDevelopmentModule {}
