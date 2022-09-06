import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryaddsPageRoutingModule } from './categoryadds-routing.module';

import { CategoryaddsPage } from './categoryadds.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryaddsPageRoutingModule,
    MaterialModule,
  ],
  declarations: [CategoryaddsPage],
})
export class CategoryaddsPageModule {}
