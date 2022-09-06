import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'market',
        loadChildren: () =>
          import('../pages/market/market.module').then(
            (m) => m.MarketPageModule
          ),
      },
      {
        path: 'feeds',
        loadChildren: () =>
          import('../pages/fees/fees.module').then((m) => m.FeesPageModule),
      },
      {
        path: 'answer',
        loadChildren: () =>
          import('../pages/answer/answer.module').then(
            (m) => m.AnswerPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
