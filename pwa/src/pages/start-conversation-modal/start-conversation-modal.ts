import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the StartConversationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-start-conversation-modal',
  templateUrl: 'start-conversation-modal.html',
})
export class StartConversationModalPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartConversationModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
