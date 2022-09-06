import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnsDetPage } from './ans-det.page';

const routes: Routes = [
  {
    path: '',
    component: AnsDetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnsDetPageRoutingModule {}
