import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        AdminModule,
        CommonModule,
        FormsModule,
        NgbDropdownModule,
        ReactiveFormsModule,
        TranslateModule,
        LayoutRoutingModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule {}
