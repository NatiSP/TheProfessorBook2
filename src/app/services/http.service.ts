import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private settingsAirtableURL = 'https://api.airtable.com/v0/appsZ9U35DpNPK99i/Data';

  exampleJSON = { "records": [{ "id": "rec8vrv8tB8uBIGIR", "createdTime": "2023-05-29T14:48:53.000Z", "fields": {} }, { "id": "recPFeL8GHq4kitm7", "createdTime": "2023-05-29T14:48:53.000Z", "fields": { "Name": "tcg-rules", "URL": "https://assets.pokemon.com//assets/cms2/pdf/trading-card-game/rulebook/svi_rulebook_en.pdf" } }, { "id": "recS0x6WGMpdENlfA", "createdTime": "2023-05-29T14:48:53.000Z", "fields": { "Name": "vg-rules", "URL": "https://assets.pokemon.com//assets/cms2/pdf/play-pokemon/rules/play-pokemon-vg-rules-formats-and-penalty-guidelines-03252023-en.pdf" } }] }

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  getSettingsFromAPI(force: boolean) {
    const options = {
      headers: { authorization: 'Bearer ' + 'patNf4FyAPTtcDgf2.01b0f88a423ce93a1c8644b03e456d7be16108b6980619a549759c755c416bf0' },
    };
    this.httpClient.get(this.settingsAirtableURL, options).subscribe(async (response: any) => {
      var newData = false;
      for (var i = 0; i < response.records.length; i++) {
        var record = response.records[i];
        var actualRecord = await this.storage.get(record.fields.Name);
        if (actualRecord == undefined || record.fields.ModificationDate > actualRecord.ModificationDate) {
          record.fields.downloaded = false;
          this.storage.set(record.fields.Name, record.fields);
          newData = true;
        }
      }
      if(newData) {
        alert("New data has been downloaded");
      } else if(force == true) {
        alert("Data is up to date");
      }
    });
  }
}

