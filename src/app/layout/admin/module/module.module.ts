import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { PageHeaderModule } from '../../../shared';
import { AlertService } from '../../../shared/services';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { ModuleViewComponent } from './module-view/module-view.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        ModuleListComponent,
        ModuleComponent,
        ModuleViewComponent,
        ModuleEditComponent,
        ModuleAddComponent
    ],
    imports: [
        CommonModule,
        ModuleRoutingModule,
        DataTablesModule,
        PageHeaderModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class ModuleModule {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService
    ) {}
}
