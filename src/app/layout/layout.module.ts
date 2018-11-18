import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        FlashMessagesModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule {}
