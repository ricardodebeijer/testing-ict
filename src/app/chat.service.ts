import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Contact } from './contact';
import { Message } from './message';
import { AuthService } from './auth.service';

@Injectable()
export class ChatService {
  private myMessageCollection: AngularFirestoreCollection<Message>;
  private contactMessageCollection: AngularFirestoreCollection<Message>;
  myMessages: Observable<any[]>;
  contactMessages: Observable<any[]>;
  combinedMessages: Observable<any[]>;


  constructor(private afs: AngularFirestore, private authService: AuthService) { }


  getMyMessagesForChat(contactUid) {
    this.myMessageCollection = this.afs.collection('gebruikers')
      .doc(this.authService.currentUserId)
      .collection('contacten')
      .doc(contactUid)
      .collection('messages', ref => ref.orderBy('datetime', 'asc'))

    return this.myMessageCollection.valueChanges()

  }

  getMessagesForChat(contactUid) {
    this.contactMessageCollection = this.afs.collection('gebruikers')
      .doc(contactUid)
      .collection('contacten')
      .doc(this.authService.currentUserId)
      .collection('messages', ref => ref.orderBy('datetime', 'asc'))

    return this.contactMessageCollection.valueChanges()

  }

  sendMessage(contactUid, message) {
    this.afs.collection('gebruikers')
      .doc(this.authService.currentUserId)
      .collection('contacten')
      .doc(contactUid)
      .collection('messages')
      .add({ content: message, datetime: Date() })
  }

}
