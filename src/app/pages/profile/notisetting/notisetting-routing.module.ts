import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotisettingPage } from './notisetting.page';

const routes: Routes = [
  {
    path: '',
    component: NotisettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotisettingPageRoutingModule {}
