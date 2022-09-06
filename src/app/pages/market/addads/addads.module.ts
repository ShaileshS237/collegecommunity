import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddadsPageRoutingModule } from './addads-routing.module';

import { AddadsPage } from './addads.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddadsPageRoutingModule,
    MaterialModule,
  ],
  declarations: [AddadsPage],
})
export class AddadsPageModule {}
