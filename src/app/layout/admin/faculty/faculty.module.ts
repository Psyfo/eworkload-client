import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyViewComponent } from './faculty-view/faculty-view.component';
import { FacultyComponent } from './faculty.component';

@NgModule({
    imports: [
        CommonModule,
        FacultyRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        FacultyComponent,
        FacultyAddComponent,
        FacultyEditComponent,
        FacultyViewComponent,
        FacultyListComponent
    ]
})
export class FacultyModule {}
