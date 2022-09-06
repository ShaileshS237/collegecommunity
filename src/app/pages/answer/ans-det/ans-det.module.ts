import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnsDetPageRoutingModule } from './ans-det-routing.module';

import { AnsDetPage } from './ans-det.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnsDetPageRoutingModule,
    MaterialModule,
  ],
  declarations: [AnsDetPage],
})
export class AnsDetPageModule {}
