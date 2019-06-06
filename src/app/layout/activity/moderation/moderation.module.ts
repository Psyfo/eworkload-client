import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModerationRoutingModule } from './moderation-routing.module';
import { ModerationComponent } from './moderation.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ModerationComponent, ListComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    ModerationRoutingModule
  ]
})
export class ModerationModule { }
