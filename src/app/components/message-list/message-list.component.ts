import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Observable<any[]>;
  constructor(
    public conversationService: ConversationService,
  ) { }
  @Input() id: string;
  ngOnInit() {
    if (this.id) {
      // console.log('getting messages for: ', this.id)
      this.messages = this.conversationService.getMessagesForConversation(this.id);
    }
  }

}
