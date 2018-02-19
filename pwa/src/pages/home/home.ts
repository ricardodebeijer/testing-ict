import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { StartConversationModalPage } from '../start-conversation-modal/start-conversation-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  logout() {
    this.navCtrl.popToRoot();
  }

  presentModal() {
    let modal = this.modalCtrl.create(StartConversationModalPage);
    modal.present();
  }

}
