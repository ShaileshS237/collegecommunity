import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { FeesPageRoutingModule } from './fees-routing.module';

import { FeesPage } from './fees.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesPageRoutingModule,
    MaterialModule,
    AngularTypewriterEffectModule,
  ],
  declarations: [FeesPage],
})
export class FeesPageModule {}
