import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserSearchModalComponent } from '../user-search-modal/user-search-modal.component';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-user-search-button',
  templateUrl: './user-search-button.component.html',
  styleUrls: ['./user-search-button.component.css']
})
export class UserSearchButtonComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public conversationService: ConversationService
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserSearchModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('start conversation dialog result:', result);
      if (result) {
        this.startConversationWithUser(result);
      }
    });
  }

  startConversationWithUser(id) {
    this.conversationService.startConversationWithUser(id);
  }
}
