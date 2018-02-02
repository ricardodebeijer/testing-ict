import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search-modal',
  templateUrl: './user-search-modal.component.html',
  styleUrls: ['./user-search-modal.component.css']
})
export class UserSearchModalComponent implements OnInit {

  users: Observable<any[]>;

  constructor(
    public userService: UserService,
    public contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }


  addTestData() {
    this.contactService.generateContactList()
  }

  addUserToContactList(id){
this.contactService.addContactToCurrentUser(id);
  }
}
