import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ConversationService } from '../../services/conversation.service';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {
  conversations: Observable<any[]>;

  constructor(
    public conversationService: ConversationService,
    private router: Router) { }

  ngOnInit() {
    this.conversations = this.conversationService.getConversationsForUser();
  }

  selectConversation(id) {
    this.router.navigate(['/conversation', { outlets: { 'convoutlet': [id] } }], { skipLocationChange: true });
  }
}
