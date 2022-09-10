import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesPage } from './fees.page';

const routes: Routes = [
  {
    path: '',
    component: FeesPage,
  },
  {
    path: 'addpost',
    loadChildren: () =>
      import('./addpost/addpost.module').then((m) => m.AddpostPageModule),
  },
  {
    path: 'singlepost',
    loadChildren: () =>
      import('./singlepost/singlepost.module').then(
        (m) => m.SinglepostPageModule
      ),
  },
  {
    path: 'singlepost/:id',
    loadChildren: () =>
      import('./singlepost/singlepost.module').then(
        (m) => m.SinglepostPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesPageRoutingModule {}
