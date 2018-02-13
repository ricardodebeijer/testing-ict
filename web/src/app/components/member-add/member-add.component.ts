import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';
import { Observable } from 'rxjs/observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';
import { UserSearchModalComponent } from '../user-search-modal/user-search-modal.component';
import { MatDialog } from '@angular/material';

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
    public dialog: MatDialog,
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


  openDialog() {
    const dialogRef = this.dialog.open(UserSearchModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('add member dialog result:', result);
      if (result) {
        this.addMember(result);
      }
    });
  }

  addMember(id) {
    // console.log('adding member', id, 'to', this.conversationId);
    this.conversationService.addMembersToConversation(id, this.conversationId);
  }

}
