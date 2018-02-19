import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Conversation } from '../../models/Conversation';
import { ConversationProvider } from '../../providers/conversation/conversation';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs/observable';
/**
 * Generated class for the MessageListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-list',
  templateUrl: 'message-list.html'
})
export class MessageListComponent  implements OnInit, OnChanges  {
  @Input() conversation: Conversation;
  messages: Observable<any[]>;

  constructor(
    public conversationProvider: ConversationProvider, 
    public authenticationProvider: AuthProvider) {
  }


  ngOnChanges() {
    this.updateMessages();
  }
  ngOnInit() {
    this.updateMessages();
  }

  updateMessages() {
    if (this.conversation) {
      console.log('updating messages for: ', this.conversation.id);
      this.messages = this.conversationProvider.getMessagesForConversation(this.conversation.id);
    }
  }

  isUserSender(messageSenderId) {
    return this.authenticationProvider.getCurrentUserId() === messageSenderId;
  }

}
