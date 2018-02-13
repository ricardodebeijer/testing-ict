import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Conversation } from '../../models/Conversation';
import { ConversationProvider } from '../../providers/conversation/conversation';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
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
export class MessageListComponent implements OnInit, OnChanges {
  @Input() item: Conversation;
  messages: Observable<any[]>;

  constructor(public conversationProvider: ConversationProvider, public authenticationProvider: AuthenticationProvider) {
    console.log('Hello MessageListComponent Component');

  }


  ngOnChanges() {
    // console.log('message list changes', this.conversationId);
    this.updateMessages();
  }
  ngOnInit() {
    // console.log('message list ', this.conversationId);
    this.updateMessages();
  }

  updateMessages() {
    if (this.item) {
      console.log('updating messages for: ', this.item.id);
      this.messages = this.conversationProvider.getMessagesForConversation(this.item.id);
    }
  }

  isUserSender(messageSenderId) {
    return this.authenticationProvider.getCurrentUserId() === messageSenderId;
  }

}
