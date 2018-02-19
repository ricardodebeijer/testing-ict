import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Conversation } from '../../models/Conversation';
import { ConversationProvider } from '../../providers/conversation/conversation';
/**
 * Generated class for the MessageInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'message-input',
  templateUrl: 'message-input.html'
})
export class MessageInputComponent  {

  @Input() conversation: Conversation;
  msgValue: string;

  constructor(public conversationProvider: ConversationProvider) {
    console.log('Hello MessageInputComponent Component');
  }

  sendMessage(content) {
    console.log('sending message to ', this.conversation.id, ':', content);
    this.conversationProvider.addMessageToConversation(this.conversation.id, content);
    this.msgValue = '';
  }

}
