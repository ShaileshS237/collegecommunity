import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistationPageRoutingModule } from './registation-routing.module';

import { RegistationPage } from './registation.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistationPageRoutingModule,
    MaterialModule,
  ],
  declarations: [RegistationPage],
})
export class RegistationPageModule {}
