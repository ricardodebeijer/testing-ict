import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';
import { ConversationService } from '../../services/conversation.service';
import { UserService } from '../../services/user.service';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.css']
})
export class ConversationPanelComponent implements OnInit, OnChanges {
  private conversationDoc: AngularFirestoreDocument<Conversation>;
  conversation: Observable<any>;
  isConversationSelected = false;
  conversationId: string;
  isSideNavOpened: boolean;
  @Input() isChild: boolean;
  @Input() childConvId: string;
  @Input() childUserId: string;
  private oldId: string;

  constructor(
    private route: ActivatedRoute,
    public conversationService: ConversationService,
    public userService: UserService,
    private windowService: WindowService
  ) {
    // console.log('openening conv panel');
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'none') {
        this.conversationId = id;
        // console.log('id set', id);
        this.updatePanel();
      } else {
        this.isConversationSelected = false;
      }

    });
  }
  ngOnChanges() {
    console.log('conversation panel changes', this.isChild, this.childConvId, this.childUserId, this.conversationId);
    if (this.isChild) {
      this.conversationService.updateCollection(this.childUserId);
      this.conversationId = this.childConvId;
    }
    this.updatePanel();
  }
  ngOnInit() {
    // console.log('message list ', this.conversationId);
    this.updatePanel();
  }


  updatePanel() {
    if (this.conversationId !== this.oldId) {
      this.conversationDoc = this.conversationService.getConversationById(this.conversationId);
      // console.log('conversationDoc set', this.conversationDoc, 'service', this.conversationService);
      this.conversation = this.conversationDoc.valueChanges();
      this.isConversationSelected = this.conversation !== null;
    }
  }

  showChild() {
    this.windowService.createChildWindow(this.conversationId);
  }
}
