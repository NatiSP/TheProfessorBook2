import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VgPageRoutingModule } from './vg-routing.module';

import { VgPage } from './vg.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VgPageRoutingModule,
    HeaderModule
  ],
  declarations: [VgPage],
})
export class VgPageModule {}
