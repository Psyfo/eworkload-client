import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkFocusRoutingModule } from './work-focus-routing.module';
import { WorkFocusComponent } from './work-focus.component';

@NgModule({
    declarations: [WorkFocusComponent],
    imports: [CommonModule, WorkFocusRoutingModule]
})
export class WorkFocusModule {}
