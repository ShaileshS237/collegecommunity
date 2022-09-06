import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesPage } from './fees.page';

const routes: Routes = [
  {
    path: '',
    component: FeesPage
  },
  {
    path: 'addpost',
    loadChildren: () => import('./addpost/addpost.module').then( m => m.AddpostPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesPageRoutingModule {}
