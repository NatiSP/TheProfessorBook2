import { Component, OnInit } from '@angular/core';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Storage } from '@ionic/storage';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  name: string = "";
  popId: string = "";
  saved = false;
  forceDownload = false;

  constructor(private storage: Storage, private httpService: HttpService, private file: File) { }

  async ngOnInit() {
    this.name = await this.storage.get('settings-name');
    this.popId = await this.storage.get('settings-popId');
    this.forceDownload = await this.storage.get('settings-forceDownload');
    this.saved = false;
  }

  saveSettings() {
    this.storage.set('settings-name', this.name);
    this.storage.set('settings-popId', this.popId);
    this.storage.set('settings-forceDownload', this.forceDownload);
    this.saved = true;
  }

  updateDocs() {
    this.httpService.getSettingsFromAPI(true);
  }

  clearData() {
    this.file.listDir(this.file.dataDirectory, '').then((entryList) => {
      for(let entry of entryList) {
        entry.remove(function(){}, function(){});
      }
    })
    this.storage.clear().then(() => {
      alert("Data cleared!");
    });
  }

}
