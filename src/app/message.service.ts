import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()
export class MessageService {

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {

  }

  getMessagesForConversation(id) {
    return this.afs.collection('conversations').doc(id).collection('messages').valueChanges();
  }

  sendMessage(receiver: string, content: string) {
    const sender = this.authService.getCurrentUserId();

    // this.afs.collection('messages').doc(this.afs.createId()).set({
    //   members: [
    //     sender,
    //     receiver
    //   ],
    //   name: 'Chat van ' + receiver + ' en ' + sender
    // }).then((doc) => {
    //   // doc.collection('messages').add({
    //   //   owner: sender,
    //   //   content: content,
    //   //   datetime: Date()
    //   // });
    // });


  }
}
