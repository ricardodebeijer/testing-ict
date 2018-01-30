import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Contact } from './contact';

@Injectable()
export class ChatService {
  private messageCollection: AngularFirestoreCollection<Contact>;
  messages: Observable<any[]>;


  constructor() { }


  getMessagesForChat(contactDoc: AngularFirestoreDocument<Contact>) {
    this.messageCollection = contactDoc.collection('messages',
      ref => ref.orderBy('datetime', 'asc').limit(10));
    this.messages = this.messageCollection.valueChanges();
    return this.messages;
  }

  chatSend() {
    // contactDoc.collection('messages').add({ content: message, datetime: Date() })
  }

}
