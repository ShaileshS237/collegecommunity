import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddadsPage } from './addads.page';

const routes: Routes = [
  {
    path: '',
    component: AddadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddadsPageRoutingModule {}
