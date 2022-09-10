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
  {
    path: 'makeadeal',
    loadChildren: () => import('./makeadeal/makeadeal.module').then( m => m.MakeadealPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketPageRoutingModule {}
