import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeadealPageRoutingModule } from './makeadeal-routing.module';

import { MakeadealPage } from './makeadeal.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeadealPageRoutingModule,
    MaterialModule,
  ],
  declarations: [MakeadealPage],
})
export class MakeadealPageModule {}
