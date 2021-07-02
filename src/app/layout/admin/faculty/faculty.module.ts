import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';

@NgModule({
    imports: [
        CommonModule,
        FacultyRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        FacultyComponent
    ]
})
export class FacultyModule {}
