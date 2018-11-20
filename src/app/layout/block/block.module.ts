import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        CommonModule,
        BlockRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FlashMessagesModule

    ],
    declarations: [BlockComponent]
})
export class BlockModule { }
