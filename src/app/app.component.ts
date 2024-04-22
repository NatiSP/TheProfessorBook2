import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'TCG Documents', url: '/tcg', icon: 'layers' },
    { title: 'VG Documents', url: '/vg', icon: 'game-controller' },
    { title: 'GO Documents', url: '/go', icon: 'phone-portrait' },
    { title: 'RK9', url: '/rk9', icon: 'desktop' },
    { title: 'Settings', url: '/settings', icon: 'cog' }
  ];
  constructor(private backgroundMode: BackgroundMode, private router: Router, private httpService: HttpService, private dataService: DataService, private storage: Storage) {
    this.storage.create();
  }

  name: string = "";

  openMenu = false;

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    //await this.storage.create();
    //await this.storage.create();

    if(await this.storage.get('name') != null) {
      this.name = await this.storage.get('name');
    }
    this.httpService.getSettingsFromAPI(false);
    this.backgroundMode.enable();

  }

  navigateToPage(page: any) {
    this.router.navigate([page]);
  }

  openMenuToggle() {
    this.openMenu = !this.openMenu;
  }


}
