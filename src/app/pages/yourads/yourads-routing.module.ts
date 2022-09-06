import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouradsPage } from './yourads.page';

const routes: Routes = [
  {
    path: '',
    component: YouradsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouradsPageRoutingModule {}
