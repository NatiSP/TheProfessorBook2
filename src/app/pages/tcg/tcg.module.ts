import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcgPageRoutingModule } from './tcg-routing.module';

import { TcgPage } from './tcg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcgPageRoutingModule
  ],
  declarations: [TcgPage]
})
export class TcgPageModule {}
