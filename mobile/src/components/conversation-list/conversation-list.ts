import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Conversation } from '../../models/Conversation';
import { Observable } from 'rxjs/observable';
import { ConversationProvider } from '../../providers/conversation/conversation';
import { ConversationPage } from '../../pages/conversation/conversation';
/**
 * Generated class for the ConversationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'conversation-list',
  templateUrl: 'conversation-list.html'
})
export class ConversationListComponent {
  conversations: Observable<any>; // read collection
  constructor(public navCtrl: NavController, public conversationProvider: ConversationProvider) {
    console.log('Hello ConversationListComponent Component');
    this.conversations = this.conversationProvider.getConversationsForUser();
  }

  selectConversation(item) {
    // console.log('nav to,', item)
    this.navCtrl.push(ConversationPage, item)
  }
}
