import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {

  constructor(private afs: AngularFirestore) {

  }

  getMessagesForContact(id) {
    return this.afs.collection('md-contact-list').doc(id).collection('messages').valueChanges()
  }

  sendMessage(sender: string, receiver: string, content: string) {
    this.afs.collection('md-contact-list').doc(receiver).collection('messages').add({
      // owner: sender,
      content: content,
      datetime: Date()
    })
  }
}
