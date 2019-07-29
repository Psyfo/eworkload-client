import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddModerationComponent } from './add-moderation/add-moderation.component';
import { EditModerationComponent } from './edit-moderation/edit-moderation.component';
import { ListModerationComponent } from './list-moderation/list-moderation.component';
import { ModerationRoutingModule } from './moderation-routing.module';
import { ModerationComponent } from './moderation.component';
import { ViewModerationComponent } from './view-moderation/view-moderation.component';

@NgModule({
    declarations: [
        ModerationComponent,
        AddModerationComponent,
        EditModerationComponent,
        ViewModerationComponent,
        ListModerationComponent
    ],
    imports: [CommonModule, ModerationRoutingModule]
})
export class ModerationModule {}
