import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPage } from './market.page';

const routes: Routes = [
  {
    path: '',
    component: MarketPage,
  },
  {
    path: 'addads',
    loadChildren: () => import('./addads/addads.module').then( m => m.AddadsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketPageRoutingModule {}
