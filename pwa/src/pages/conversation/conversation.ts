import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversation } from '../../models/Conversation';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  item: Conversation

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams)
    this.item = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
  }

}
