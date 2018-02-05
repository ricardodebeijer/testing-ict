import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  private contactDoc: AngularFirestoreDocument<Contact>;
  contact: Observable<Contact>;
  isContactSelected = false;
  contactId: string;
  constructor(
    private route: ActivatedRoute,
    public contactService: ContactService,
    public userService: UserService,
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'none') {
        this.contactId = id;
        this.contactDoc = userService.getUserById(id);
        this.contact = this.contactDoc.valueChanges();
        // Todo: fix showing a chat where the contact is not in your contact list, showing as null now... But async prevents below
        this.isContactSelected = this.contact !== null;
      } else {
        this.isContactSelected = false;
      }

    });
  }

  ngOnInit() {
  }

}
