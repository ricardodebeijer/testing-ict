import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversation } from '../../models/Conversation';
import { ConversationProvider } from '../../providers/conversation/conversation';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Observable } from 'rxjs/observable';

/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  item: Conversation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }
}
