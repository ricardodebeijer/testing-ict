import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';

@Injectable()
export class UserService {
  userCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
    this.users = this.userCollection.valueChanges();
  }

  getUserById(id) {
    const contact =  this.userCollection.doc<Contact>(id);
    return contact;
  }

  getAllUsers() {
    return  this.userCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }
}
