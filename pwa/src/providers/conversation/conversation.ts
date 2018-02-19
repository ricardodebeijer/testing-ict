import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Conversation } from '../../models/Conversation';
import * as firebase from 'firebase';
import { AuthProvider } from '../auth/auth';
import { UserProvider } from '../user/user';
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
    private authenciationProvider: AuthProvider,
    private userProvider: UserProvider) {
    let uid = this.authenciationProvider.getCurrentUserId();
    const memberIdentifier = 'members.' + uid;
    this.conversationCollection = this.afs.collection('conversationsv2', ref => ref.where(memberIdentifier, '==', true));
    this.conversations = this.conversationCollection.valueChanges();
  }

  async startConversationWithUser(id) {
    const currentUser = this.authenciationProvider.getCurrentUser();
    const selectedUser = this.userProvider.getUserById(id);
    const currentUserName = await currentUser.ref.get().then(doc => doc.get('username'));
    const selectedUserName = await selectedUser.ref.get().then(doc => doc.get('username'));
    const name = currentUserName + ' & ' + selectedUserName;
    const currentUserId = currentUser.ref.id;
    const selectedUserId = selectedUser.ref.id;
    console.log(currentUser, currentUserName, currentUserId);
    console.log(selectedUser, selectedUserName, selectedUserId);
    this.conversationCollection.add({
      name: name,
      members: {
        [currentUserId]: true,
        [selectedUserId]: true,
      }
    });
    return;
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

  async addMessageToConversation(conversationId: string, content: string) {
    const conversation = this.getConversationById(conversationId);
    const sender = this.authenciationProvider.getCurrentUser();
    const sender_displayName = await sender.ref.get().then(doc => {
      const displayName = doc.get('firstname') + ' ' + doc.get('lastname')
      return displayName;
    });
    conversation.collection('messages').add({
      sender_id: sender.ref.id,
      sender_name: sender_displayName,
      content: content,
      datetime: firebase.firestore.FieldValue.serverTimestamp(),
      type: 'text'
    });
  }
}
