import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Conversation } from '../conversation';

@Injectable()
export class ConversationService {
  conversationCollection: AngularFirestoreCollection<Conversation>;
  conversations: Observable<any[]>;


  constructor(
    private afs: AngularFirestore,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.updateCollection();
    this.conversations = this.conversationCollection.valueChanges();
  }

  updateCollection() {
    const memberIdentifier = 'members.' + this.authService.getCurrentUserId();
    console.log(memberIdentifier);
    this.conversationCollection = this.afs.collection('conversations', ref => ref.where(memberIdentifier, '==', true));
  }

  async startConversationWithUser(id) {
    const currentUser = this.authService.getCurrentUser();
    const selectedUser = this.userService.getUserById(id);
    const currentUserName = await currentUser.ref.get().then(doc => doc.get('username'));
    const selectedUserName = await selectedUser.ref.get().then(doc => doc.get('username'));
    const name = currentUserName + ' & ' + selectedUserName;
    const currentUserId = currentUser.ref.id;
    const selectedUserId = selectedUser.ref.id;
    console.log(currentUser, currentUserName, currentUserId);
    console.log(selectedUser, selectedUserName, selectedUserId);
    this.conversationCollection.add({
      name: name,
      type: 'personal',
      members: {
        [currentUserId]: true,
        [selectedUserId]: true,
      }
    });
    return;
  }

  getConversationsForUser() {
    this.updateCollection();
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
    return this.conversationCollection.doc(id).collection('messages').valueChanges();
  }

  addMessageToConversation(conversationId: string, content: string) {
    const conversation = this.getConversationById(conversationId);
    const sender = this.authService.getCurrentUser();

    conversation.collection('messages').add({
      sender: sender.ref.id,
      content: content,
      datetime: Date()
    });
  }
}
