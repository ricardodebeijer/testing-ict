import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { Observable } from 'rxjs/observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit, OnChanges {
  private conversationDoc: AngularFirestoreDocument<Conversation>;
  conversation: Observable<any>;
  users: Observable<any[]>;
  members: string[];
  @Input() conversationId: string;
  private oldId: string;
  constructor(
    public conversationService: ConversationService,
  ) { }

  ngOnChanges() {
    // console.log('message list changes', this.conversationId);
    this.updateMemberList();
  }
  ngOnInit() {
    // console.log('message list ', this.conversationId);
    this.updateMemberList();
  }

  updateMemberList() {
    if (this.conversationId !== this.oldId) {
      // console.log('updating conv info: ', this.conversationId);
      this.conversationDoc = this.conversationService.getConversationById(this.conversationId);
      this.conversation = this.conversationDoc.valueChanges();
      this.oldId = this.conversationId;
      this.conversationDoc.ref.get().then(doc => {
        const members = doc.get('members');
        console.log('members', members);
        this.members = [];
        // tslint:disable-next-line:forin
        for (const key in members) {
          console.log('key', key);
          this.members.push(key);
        }

      });
    }
  }

}
