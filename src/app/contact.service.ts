import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { ContactReference } from './contact-reference';
import { User } from './user';

@Injectable()
export class ContactService {
  myContactsCollection: AngularFirestoreCollection<any>;
  myContacts: Observable<ContactReference[]>;
  private contactDoc: AngularFirestoreDocument<Contact>;

  constructor(
    private afs: AngularFirestore,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.myContactsCollection = this.afs.collection('contacts').doc(this.authService.getCurrentUserId()).collection('contacts');
    this.myContacts = this.myContactsCollection.valueChanges();
  }

  getContactListForUser() {
    return this.myContacts;
  }

  addContactToCurrentUser(id) {
    // console.log('add contact:', id);
    const user = this.userService.getUserById(id);
    user.ref.get().then((doc) => {
      console.log('data', doc.data());
      const displayName = doc.data().firstname + ' ' + doc.data().lastname;
      this.myContactsCollection.add({
        userId: doc.id,
        displayName: displayName
      });
    });
  }

}
