import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-dev-user',
  templateUrl: './dev-user.component.html',
  styleUrls: ['./dev-user.component.css']
})
export class DevUserComponent implements OnInit {
  selected = 'rZZEmGjKVnhmjpnwN3Up';
  contacts: Observable<any[]>;

  constructor(
    public conversationService: ConversationService,
    public userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.contacts = this.userService.getAllUsers();
  }

  userChanged() {
    console.log('user changed', this.selected);
  }


}
