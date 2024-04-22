import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tcg',
  templateUrl: './tcg.page.html',
  styleUrls: ['./tcg.page.scss'],
})
export class TcgPage implements OnInit {

  public tcgURLs : any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  async ngOnInit() {
    this.tcgURLs = await this.dataService.getURLFromStorage('TCG');
  }

  openURL(element: any) {
    this.dataService.getDocument(element);
  }

}
