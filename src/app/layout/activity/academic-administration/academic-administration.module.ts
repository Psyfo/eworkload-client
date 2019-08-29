import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcademicAdministrationRoutingModule } from './academic-administration-routing.module';
import { AcademicAdministrationComponent } from './academic-administration.component';
import { AddAcademicAdministrationComponent } from './add-academic-administration/add-academic-administration.component';
import { EditAcademicAdministrationComponent } from './edit-academic-administration/edit-academic-administration.component';
import { ListAcademicAdministrationComponent } from './list-academic-administration/list-academic-administration.component';
import { ViewAcademicAdministrationComponent } from './view-academic-administration/view-academic-administration.component';

@NgModule({
    declarations: [
        ListAcademicAdministrationComponent,
        ViewAcademicAdministrationComponent,
        AddAcademicAdministrationComponent,
        EditAcademicAdministrationComponent,
        AcademicAdministrationComponent
    ],
    imports: [
        CommonModule,
        AcademicAdministrationRoutingModule,
        PrimeNgModulesModule
    ]
})
export class AcademicAdministrationModule {}
