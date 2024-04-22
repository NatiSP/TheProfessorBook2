import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderModule } from './components/header/header.module';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule, FormsModule, HeaderModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ModalComponent, BackgroundMode, Vibration, HTTP, FileOpener, FileTransfer, File],
  exports: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
