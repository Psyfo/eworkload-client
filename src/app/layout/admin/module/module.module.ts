import { DataTablesModule } from 'angular-datatables';
import { AlertService, PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleViewComponent } from './module-view/module-view.component';
import { ModuleComponent } from './module.component';

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
