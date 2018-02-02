import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dev-user',
  templateUrl: './dev-user.component.html',
  styleUrls: ['./dev-user.component.css']
})
export class DevUserComponent implements OnInit {
  selected = 'tHnzwWGbIMEm7W9EiurU';
  contacts: Observable<any[]>;

  constructor(
    public contactService: ContactService,
    public userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.contacts = this.contactService.getContactListForUser();
  }

  userChanged() {
    console.log('user changed', this.selected);
  }


}
