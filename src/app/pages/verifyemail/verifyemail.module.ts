import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularOtpLibModule } from 'angular-otp-box';
import { IonicModule } from '@ionic/angular';

import { VerifyemailPageRoutingModule } from './verifyemail-routing.module';

import { VerifyemailPage } from './verifyemail.page';
import { MaterialModule } from 'src/app/material.module';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyemailPageRoutingModule,
    AngularOtpLibModule,
    MaterialModule,
    NgOtpInputModule,
  ],
  declarations: [VerifyemailPage],
})
export class VerifyemailPageModule {}
