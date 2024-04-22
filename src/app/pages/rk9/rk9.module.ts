import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rk9PageRoutingModule } from './rk9-routing.module';

import { Rk9Page } from './rk9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rk9PageRoutingModule
  ],
  declarations: [Rk9Page]
})
export class Rk9PageModule {}
