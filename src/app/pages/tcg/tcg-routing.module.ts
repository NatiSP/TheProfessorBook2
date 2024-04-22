import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcgPage } from './tcg.page';

const routes: Routes = [
  {
    path: '',
    component: TcgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcgPageRoutingModule {}
