import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Observable<any[]>;

  constructor(
    public contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.contacts = this.contactService.getContactListForUser();
  }

  selectContact(contact) {
    this.router.navigate(['/chat/' + contact.userId]);
  }
}
