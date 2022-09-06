import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YouradsPageRoutingModule } from './yourads-routing.module';

import { YouradsPage } from './yourads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouradsPageRoutingModule
  ],
  declarations: [YouradsPage]
})
export class YouradsPageModule {}
