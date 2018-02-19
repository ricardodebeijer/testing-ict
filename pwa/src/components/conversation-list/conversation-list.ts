import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../../pages/conversation/conversation';
import { Observable } from 'rxjs/observable';
import { ConversationProvider } from '../../providers/conversation/conversation';
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

  conversations: Observable<any>;
  constructor(public navCtrl: NavController, public conversationProvider: ConversationProvider) {
    this.conversations = this.conversationProvider.getConversationsForUser();
  }

  selectConversation(item) {
    this.navCtrl.push(ConversationPage, item)
  }

}
