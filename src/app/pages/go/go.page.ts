import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.page.html',
  styleUrls: ['./go.page.scss'],
})
export class GoPage implements OnInit {

  public goURLs : any[] = [];

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.goURLs = await this.dataService.getURLFromStorage('GO');
  }

  openURL(element: any) {
    this.dataService.getDocument(element);
  }

}
