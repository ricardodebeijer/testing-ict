import { Component, OnInit, Input } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit, OnChanges {
  msgValue = '';
  @Input() conversationId: string;

  constructor(
    public conversationService: ConversationService,
  ) { }
  ngOnChanges() {
    console.log('message list changes ', this.conversationId);
  }

  ngOnInit() {
    console.log('message input ', this.conversationId);
  }

  sendMessage(content) {
    // console.log('sending message to ', this.conversationId, ':', content);
    this.conversationService.addMessageToConversation(this.conversationId, content);
    this.msgValue = '';
  }

}
