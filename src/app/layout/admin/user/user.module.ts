import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        UserComponent,
        ListUserComponent,
        AddUserComponent,
        EditUserComponent,
        ViewUserComponent
    ]
})
export class UserModule {}
