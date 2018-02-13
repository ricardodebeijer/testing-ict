import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-conversation-info',
  templateUrl: './conversation-info.component.html',
  styleUrls: ['./conversation-info.component.css']
})
export class ConversationInfoComponent implements OnInit, OnChanges {
  private conversationDoc: AngularFirestoreDocument<Conversation>;
  conversation: Observable<any>;
  nameValue = '';
  @Input() conversationId: string;
  private oldId: string;

  constructor(
    public conversationService: ConversationService,
  ) { }


  ngOnChanges() {
    // console.log('message list changes', this.conversationId);
    this.updateInfo();
  }
  ngOnInit() {
    // console.log('message list ', this.conversationId);
    this.updateInfo();
  }

  async updateInfo() {
    if (this.conversationId !== this.oldId) {
      // console.log('updating conv info: ', this.conversationId);
      this.conversationDoc = this.conversationService.getConversationById(this.conversationId);
      this.conversation = this.conversationDoc.valueChanges();
      this.nameValue = await this.conversationDoc.ref.get().then(doc => doc.get('name'));
      this.oldId = this.conversationId;
    }
  }

  updateName(name) {
    console.log('change name', name);
    this.conversationDoc.update({name: name});
  }

}
