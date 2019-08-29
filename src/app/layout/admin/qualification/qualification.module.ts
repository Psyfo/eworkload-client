import { DataTablesModule } from 'angular-datatables';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QualificationAddComponent } from './qualification-add/qualification-add.component';
import { QualificationEditComponent } from './qualification-edit/qualification-edit.component';
import { QualificationListComponent } from './qualification-list/qualification-list.component';
import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationViewComponent } from './qualification-view/qualification-view.component';
import { QualificationComponent } from './qualification.component';

@NgModule({
    declarations: [
        QualificationComponent,
        QualificationListComponent,
        QualificationAddComponent,
        QualificationEditComponent,
        QualificationViewComponent
    ],
    imports: [
        CommonModule,
        QualificationRoutingModule,
        DataTablesModule,
        NgbModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ]
})
export class QualificationModule {}
