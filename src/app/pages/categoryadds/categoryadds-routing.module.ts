import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryaddsPage } from './categoryadds.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryaddsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryaddsPageRoutingModule {}
