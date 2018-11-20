import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerRoutingModule } from './lecturer-routing.module';
import { LecturerComponent } from './lecturer.component';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';
import { LecturerAddComponent } from './lecturer-add/lecturer-add.component';
import { LecturerEditComponent } from './lecturer-edit/lecturer-edit.component';
import { LecturerViewComponent } from './lecturer-view/lecturer-view.component';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        CommonModule,
        LecturerRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FlashMessagesModule
    ],
    declarations: [LecturerComponent, LecturerListComponent, LecturerAddComponent, LecturerEditComponent, LecturerViewComponent]
})
export class LecturerModule { }
