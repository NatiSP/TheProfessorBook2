import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  name: string = "";
  popId: string = "";

  constructor(private storage: Storage, private modalController: ModalController) { }

  ngOnInit() {}

  confirm() {
    this.storage.set('name', this.name);
    this.storage.set('popId', this.popId);
    this.storage.set('firstTime', false);
    this.cancel();
  }

  cancel() {
    this.modalController.dismiss();
  }

}
