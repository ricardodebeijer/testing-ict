import { Component, OnInit, Input } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  msgValue = '';
  @Input() id: string;

  constructor(
    public conversationService: ConversationService,
  ) { }

  ngOnInit() {
  }

  sendMessage(content) {
    console.log('sending message to ', this.id, ':', content);
    this.conversationService.addMessageToConversation(this.id, content);
    this.msgValue = '';
  }

}
