import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../shared';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ],
  declarations: [
      SignupComponent
]
})
export class SignupModule { }
