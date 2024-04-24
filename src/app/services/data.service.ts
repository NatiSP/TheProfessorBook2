import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Entry, File, FileEntry, IFile } from '@awesome-cordova-plugins/file/ngx';
import { FileTransfer, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { HttpClient } from '@angular/common/http';

import { Filesystem, Directory, Encoding, DownloadFileResult } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db: Storage;

  constructor(private storage: Storage, private fileTransfer: FileTransfer, private router: Router, 
    private platform: Platform, private fileOpener: FileOpener, private file: File, private httpClient: HttpClient,
  private nativeHTTP: HTTP) {
    this.storage.create();
    this.db = this.storage;
  }

  loadStorage() {
    if (this.db == null) {
      this.storage.create();
      this.db = this.storage;
    }
  }

  getURLFromStorage(category: string) {
    var urls: any = [];
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
      if(!key.includes('settings')) {
        if (value.Category === category) {
          urls.push(value);
        }
      }
    });
    return urls;
  }

  async getDocument(doc: any) {
    try {
      var document = await this.storage.get(doc.Name);
      if (document == undefined) {
        alert("Document not found");
      } else {
        if (document.URL.includes("profbook:")) {
          document.URL = document.URL.replace("profbook:", "");
          this.router.navigate([document.URL]);
        } else {
          let forceDownload = await this.storage.get('settings-forceDownload');
          if (document.isPDF && this.isMobileDevice() && !forceDownload) {
            
            if (!document.downloaded || document.path === undefined) {
              //alert(document.URL);

              this.nativeHTTP.downloadFile(document.URL, {}, {'Accept': 'application/pdf'}, this.file.dataDirectory + document.Name + '.pdf').then((entry: FileEntry) => {
                if (entry) {
                  entry.file(async success => { 
                      var mimeType = success.type;
                      //alert(mimeType);
                      document.downloaded = true;
                      document.path = entry.nativeURL;
                      await this.storage.set(doc.Name, document);
                      this.fileOpener.open(entry.nativeURL, mimeType)
                        .then(() => console.log('file should be open'))
                        .catch(e => alert('Error opening file: ' + JSON.stringify(e)));
                  }, error => {
                      // no mime type found;
                  });        
                }
            }).catch((error) => {
              alert("Error: " + error);
            });



/*
              Filesystem.downloadFile({
                path: doc.Name,
                directory: Directory.Data,
                url: document.URL
              }).then(async (response: DownloadFileResult) => {
                if(response.path) {
                  alert(response.path);
                  this.file.resolveDirectoryUrl(this.file.dataDirectory).then((dir) => {
                    this.file.getFile(dir, document.Name, {}).then((entry: FileEntry) => {
                      if (entry) {
                        entry.file(async success => { 
                            var mimeType = success.type;
                            alert(mimeType);
                            document.downloaded = true;
                            document.path = entry.nativeURL;
                            await this.storage.set(doc.Name, document);
                            this.fileOpener.open(entry.nativeURL, mimeType)
                              .then(() => console.log('file should be open'))
                              .catch(e => alert('Error opening file: ' + JSON.stringify(e)));
                        }, error => {
                            // no mime type found;
                        });        
                      }
                    });
                  }) 
                  
                } else {
                  alert("An unknown error happened!");
                }

                
                
              }).catch(e => {
                alert("Error downloading the file: " + e);
              });   
              
              */
              
            } else {
              try {
                //alert(document.path);
                this.file.resolveDirectoryUrl(this.file.dataDirectory).then((dir) => {
                  this.file.getFile(dir, document.Name + '.pdf', {}).then((entry: FileEntry) => {
                    if (entry) {
                      entry.file(async success => { 
                          var mimeType = success.type;
                          //alert(mimeType);
                          this.fileOpener.open(entry.nativeURL, mimeType)
                            .then(() => console.log('file should be open'))
                            .catch(e => alert('Error opening file: ' + JSON.stringify(e)));
                      }, error => {
                          // no mime type found;
                      });        
                    }
                  });
                })
                
              } catch (error) {
                alert("Error! " + error);
              }
            }
          } else {
            window.open(document.URL, '_blank');
          }
        }
      }
    } catch (error) {
      alert("Error getting document: " + error);
    }

  }

  isMobileDevice() {
    // We use Ionic to check if the device is mobile
    return this.platform.is('mobile')
  }
}
