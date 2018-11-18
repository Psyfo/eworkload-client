import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PageHeaderModule } from '../../shared';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        Ng2Charts,
        ReactiveFormsModule,
        FlashMessagesModule
    ],
    declarations: [ProfileComponent, ProfileViewComponent, ProfileEditComponent]
})
export class ProfileModule { }
