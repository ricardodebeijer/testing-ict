import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConversationService } from '../../services/conversation.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnChanges {
  messages: Observable<any[]>;
  constructor(
    public conversationService: ConversationService,
  ) { }
  @Input() conversationId: string;
  private oldId: string;

  ngOnChanges() {
    // console.log('message list changes', this.conversationId);
    this.updateMessages();
  }
  ngOnInit() {
    // console.log('message list ', this.conversationId);
    this.updateMessages();
  }

  updateMessages() {
    if (this.conversationId !== this.oldId) {
      console.log('updating messages for: ', this.conversationId);
      this.messages = this.conversationService.getMessagesForConversation(this.conversationId);
      this.oldId = this.conversationId;
    }
  }

}
