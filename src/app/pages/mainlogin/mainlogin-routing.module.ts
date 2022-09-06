import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainloginPage } from './mainlogin.page';

const routes: Routes = [
  {
    path: '',
    component: MainloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainloginPageRoutingModule {}
