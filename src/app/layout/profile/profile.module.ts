import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { PageHeaderModule } from 'src/app/shared/modules';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        Ng2Charts,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        ProfileComponent,
        ProfileViewComponent,
        ProfileEditComponent,
        ChangePasswordComponent
    ]
})
export class ProfileModule {}
