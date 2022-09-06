import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PripoPageRoutingModule } from './pripo-routing.module';

import { PripoPage } from './pripo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PripoPageRoutingModule
  ],
  declarations: [PripoPage]
})
export class PripoPageModule {}
