import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddBlockComponent } from './add-block/add-block.component';
import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { ViewBlockComponent } from './view-block/view-block.component';

@NgModule({
    declarations: [
        BlockComponent,
        AddBlockComponent,
        EditBlockComponent,
        ListBlockComponent,
        ViewBlockComponent
    ],
    imports: [CommonModule, BlockRoutingModule]
})
export class BlockModule {}
