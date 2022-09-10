import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeadealPage } from './makeadeal.page';

const routes: Routes = [
  {
    path: '',
    component: MakeadealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeadealPageRoutingModule {}
