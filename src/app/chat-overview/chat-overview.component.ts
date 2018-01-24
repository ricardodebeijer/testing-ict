import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contact } from '../contact';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat-overview',
  templateUrl: './chat-overview.component.html',
  styleUrls: ['./chat-overview.component.css']
})
export class ChatOverviewComponent implements OnInit {
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<any[]>;

  constructor(private afs: AngularFirestore, public afa: AngularFireAuth) {
  }

  ngOnInit() {
    this.contactsCollection = this.afs.collection('contacts');
    this.contacts = this.contactsCollection.snapshotChanges()
      .map(items => {
        return items.map(item => ({ $key: item.payload.doc.id, ...item.payload.doc.data() }));
      });
  }


  login() {
    this.afa.auth.signInAnonymously()
  }
  logout() {
    this.afa.auth.signOut();
  }
}
