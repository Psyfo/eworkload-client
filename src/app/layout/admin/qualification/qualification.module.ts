import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';

@NgModule({
    declarations: [
        QualificationComponent
    ],
    imports: [
        CommonModule,
        QualificationRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ]
})
export class QualificationModule {}
