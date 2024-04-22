import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rk9Page } from './rk9.page';

const routes: Routes = [
  {
    path: '',
    component: Rk9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rk9PageRoutingModule {}
