import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
    this.users = this.userCollection.valueChanges();
  }
  getUserById(id) {
    const user = this.userCollection.doc<User>(id);
    return user;
  }

  getAllUsers() {
    return this.userCollection.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

}
