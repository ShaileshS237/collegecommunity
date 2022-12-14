import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainloginPageRoutingModule } from './mainlogin-routing.module';

import { MainloginPage } from './mainlogin.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainloginPageRoutingModule,
    MaterialModule,
  ],
  declarations: [MainloginPage],
})
export class MainloginPageModule {}
