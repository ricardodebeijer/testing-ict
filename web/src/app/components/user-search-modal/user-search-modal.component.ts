import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConversationService } from '../../services/conversation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-search-modal',
  templateUrl: './user-search-modal.component.html',
  styleUrls: ['./user-search-modal.component.css']
})
export class UserSearchModalComponent implements OnInit {

  users: Observable<any[]>;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }


}
