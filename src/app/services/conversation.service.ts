import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Conversation } from '../conversation';
import * as firebase from 'firebase';

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
  }

  updateCollection() {
    const uid = this.authService.getCurrentUserId();
    if (uid) {
      const memberIdentifier = 'members.' + uid;
      this.conversationCollection = this.afs.collection('conversations', ref => ref.where(memberIdentifier, '==', true));
      this.conversations = this.conversationCollection.valueChanges();
    }
  }

  async startConversationWithUser(id) {
    const currentUser = this.authService.getCurrentUser();
    const selectedUser = this.userService.getUserById(id);
    const currentUserName = await currentUser.ref.get().then(doc => doc.get('username'));
    const selectedUserName = await selectedUser.ref.get().then(doc => doc.get('username'));
    const name = currentUserName + ' & ' + selectedUserName;
    const currentUserId = currentUser.ref.id;
    const selectedUserId = selectedUser.ref.id;
    // console.log(currentUser, currentUserName, currentUserId);
    // console.log(selectedUser, selectedUserName, selectedUserId);
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
    if (!this.conversationCollection) {
      return;
    }

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
    if (!this.conversationCollection) {
      return;
    }
    return this.conversationCollection.doc<Conversation>(id);
  }

  getMessagesForConversation(id) {
    if (!this.conversationCollection) {
      return;
    }
    return this.conversationCollection.doc(id).collection('messages', ref => ref.orderBy('datetime', 'asc')).valueChanges();
  }

  addMessageToConversation(conversationId: string, content: string) {
    const conversation = this.getConversationById(conversationId);
    const sender = this.authService.getCurrentUser();

    conversation.collection('messages').add({
      sender: sender.ref.id,
      content: content,
      datetime: firebase.firestore.FieldValue.serverTimestamp(),
      type: 'text'
    });
  }

  addMembersToConversation(memberId: string, conversationId: string) {
    const conversation = this.getConversationById(conversationId);
    const member = this.userService.getUserById(memberId);
    conversation.ref.get().then(doc => {
      const members = doc.get('members');
      members[member.ref.id] = true;
      conversation.update({ members: members });
    });
  }

  addImageToConversation(path: string, conversationId: string) {
    const conversation = this.getConversationById(conversationId);
    const sender = this.authService.getCurrentUser();
    console.log('adding ', path, 'to', conversationId);
    conversation.collection('messages').add({
      sender: sender.ref.id,
      path,
      datetime: firebase.firestore.FieldValue.serverTimestamp(),
      type: 'image'
    });
  }
}
