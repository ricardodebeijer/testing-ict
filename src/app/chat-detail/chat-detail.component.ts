import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  private contactDoc: AngularFirestoreDocument<Contact>;
  contact: Observable<Contact>;
  isContactSelected: boolean = false;
  contactId : string;
  constructor(
    private route: ActivatedRoute,
    public contactService: ContactService,
  ) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id !== 'none') {
        this.contactId = id;
        this.contactDoc = contactService.getContactById(id)
        this.contact = this.contactDoc.valueChanges()
        this.isContactSelected = true;
      } else {
        this.isContactSelected = false;
      }

    });
  }

  ngOnInit() {
  }

}
