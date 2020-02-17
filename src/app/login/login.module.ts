import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModulesModule } from '../shared/modules/prime-ng-modules.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, PrimeNgModulesModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
