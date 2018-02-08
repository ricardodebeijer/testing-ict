import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { Observable } from 'rxjs/observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit, OnChanges {
  private conversationDoc: AngularFirestoreDocument<Conversation>;
  conversation: Observable<any>;
  users: Observable<any[]>;
  @Input() conversationId: string;
  private oldId: string;
  constructor(
    public conversationService: ConversationService,
  ) { }

  ngOnChanges() {
    // console.log('message list changes', this.conversationId);
    this.setConversation();
  }
  ngOnInit() {
    // console.log('message list ', this.conversationId);
    this.setConversation();
  }

  setConversation() {
    if (this.conversationId !== this.oldId) {
      // console.log('updating conv info: ', this.conversationId);
      this.conversationDoc = this.conversationService.getConversationById(this.conversationId);
      this.conversation = this.conversationDoc.valueChanges();
      this.oldId = this.conversationId;
    }
  }

}
