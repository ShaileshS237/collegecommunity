import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglepostPageRoutingModule } from './singlepost-routing.module';

import { SinglepostPage } from './singlepost.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglepostPageRoutingModule,
    MaterialModule,
  ],
  declarations: [SinglepostPage],
})
export class SinglepostPageModule {}
