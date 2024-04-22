import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VgPage } from './vg.page';

const routes: Routes = [
  {
    path: '',
    component: VgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VgPageRoutingModule {}
