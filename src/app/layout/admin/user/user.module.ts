import { PageHeaderModule } from 'src/app/shared/modules';
import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {}
