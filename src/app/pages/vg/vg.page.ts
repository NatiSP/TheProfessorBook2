import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-vg',
  templateUrl: './vg.page.html',
  styleUrls: ['./vg.page.scss'],
})
export class VgPage implements OnInit {

  public vgURLs : any[] = [];

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.vgURLs = await this.dataService.getURLFromStorage('VG');
  }

  openURL(element: any) {
    this.dataService.getDocument(element);
  }

}
