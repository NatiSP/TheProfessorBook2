import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private storage: Storage, private modalController: ModalController) { }

  async ngOnInit() {
    let firstTime = await this.storage.get('firstTime');
    if(firstTime == null) {
      const modal = await this.modalController.create({
        component: ModalComponent,
      });

      modal.present();
    }
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }

}
