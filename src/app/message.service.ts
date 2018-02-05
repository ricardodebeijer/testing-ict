import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class MessageService {

  constructor(private afs: AngularFirestore, private userService:UserService) {

  }

  getMessagesForContact(id) {
    return this.afs.collection('md-contact-list').doc(id).collection('messages').valueChanges()
  }

  sendMessage(receiver: string, content: string) {
    // let sender = this.userService.getCurrentUserId();
    // this.afs.collection('md-contact-list').doc(receiver).collection('messages').add({
    //   // owner: sender,
    //   content: content,
    //   datetime: Date()
    // })
  }
}
