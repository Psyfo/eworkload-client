import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { InplaceModule } from 'primeng/inplace';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageHeaderModule } from './page-header';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
    declarations: [],
    imports: [
        AccordionModule,
        AutoCompleteModule,
        BlockUIModule,
        ButtonModule,
        CardModule,
        CheckboxModule,
        CommonModule,
        ContextMenuModule,
        DropdownModule,
        FormsModule,
        InplaceModule,
        InputTextModule,
        KeyFilterModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        PageHeaderModule,
        PanelModule,
        ReactiveFormsModule,
        ScrollPanelModule,
        SliderModule,
        TableModule,
        TabViewModule,
        ToastModule,
        ToolbarModule
    ],
    exports: [
        AccordionModule,
        AutoCompleteModule,
        BlockUIModule,
        ButtonModule,
        CardModule,
        CheckboxModule,
        CommonModule,
        ContextMenuModule,
        DropdownModule,
        FormsModule,
        InplaceModule,
        InputTextModule,
        KeyFilterModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        PageHeaderModule,
        PanelModule,
        ReactiveFormsModule,
        ScrollPanelModule,
        SliderModule,
        TableModule,
        TabViewModule,
        ToastModule,
        ToolbarModule
    ]
})
export class PrimeNgModulesModule {}
