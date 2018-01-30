import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<any[]>;

  constructor(public contactService: ContactService, private authService: AuthService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContactsForUser(this.authService.currentUserId);
  }

}
