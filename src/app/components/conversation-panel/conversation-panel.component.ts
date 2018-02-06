import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';
import { ConversationService } from '../../services/conversation.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.css']
})
export class ConversationPanelComponent implements OnInit {
  private conversationDoc: AngularFirestoreDocument<Conversation>;
  conversation: Observable<any>;
  isConversationSelected = false;
  conversationId: string;
  constructor(
    private route: ActivatedRoute,
    public conversationService: ConversationService,
    public userService: UserService,
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'none') {
        this.conversationId = id;
        this.conversationDoc = conversationService.getConversationById(id);
        this.conversation = this.conversationDoc.valueChanges();
        // Todo: fix showing a chat where the contact is not in your contact list, showing as null now... But async prevents below
        this.isConversationSelected = this.conversation !== null;
      } else {
        this.isConversationSelected = false;
      }

    });
  }

  ngOnInit() {
  }

}
