import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rk9',
  templateUrl: './rk9.page.html',
  styleUrls: ['./rk9.page.scss'],
})
export class Rk9Page implements OnInit {

  public rk9URLs : any[] = [];

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.rk9URLs = await this.dataService.getURLFromStorage('RK9');
  }

  openURL(element: any) {
    this.dataService.getDocument(element);
  }

}
