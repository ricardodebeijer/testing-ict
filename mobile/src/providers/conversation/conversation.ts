import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Conversation } from '../../models/Conversation';
import { AuthenticationProvider } from '../authentication/authentication';
import * as firebase from 'firebase';
/*
  Generated class for the ConversationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversationProvider {
  private conversationCollection: AngularFirestoreCollection<Conversation>;
  private conversations: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private authenciationProvider: AuthenticationProvider) {
      let uid = this.authenciationProvider.getCurrentUserId();
      const memberIdentifier = 'members.' + uid;
      this.conversationCollection = this.afs.collection('conversations', ref => ref.where(memberIdentifier, '==', true));
      this.conversations = this.conversationCollection.valueChanges();
  }

  getConversationsForUser() {
    return this.conversationCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  getConversationById(id) {
    return this.conversationCollection.doc<Conversation>(id);
  }

  getMessagesForConversation(id) {
    return this.conversationCollection.doc(id).collection('messages', ref => ref.orderBy('datetime', 'asc')).valueChanges();
  }

  addMessageToConversation(conversationId: string, content: string) {
    const conversation = this.getConversationById(conversationId);
    const sender = this.authenciationProvider.getCurrentUser();

    conversation.collection('messages').add({
      sender: sender.ref.id,
      content: content,
      datetime: firebase.firestore.FieldValue.serverTimestamp(),
      type: 'text'
    });
  }



}
