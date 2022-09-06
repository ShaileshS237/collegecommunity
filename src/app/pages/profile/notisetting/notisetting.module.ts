import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotisettingPageRoutingModule } from './notisetting-routing.module';

import { NotisettingPage } from './notisetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotisettingPageRoutingModule
  ],
  declarations: [NotisettingPage]
})
export class NotisettingPageModule {}
