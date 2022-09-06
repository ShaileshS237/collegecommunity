import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerPage } from './answer.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerPage,
  },
  {
    path: 'ans-det',
    loadChildren: () =>
      import('./ans-det/ans-det.module').then((m) => m.AnsDetPageModule),
  },
  {
    path: 'ans-det/:id/:type',
    loadChildren: () =>
      import('./ans-det/ans-det.module').then((m) => m.AnsDetPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerPageRoutingModule {}
