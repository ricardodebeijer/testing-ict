import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UserMock } from '../user-mock';
import { User } from '../user';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;


  constructor(
    private afs: AngularFirestore) {
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

  addUserIfNotExisting(item) {
    console.log('in user service in', item);
    this.userCollection.doc(item.uid).ref.get().then(docSnapshot => {
      if (!docSnapshot.exists) {
        console.log('adding user to /users/' + item.uid);
        const user = UserMock.generateTestUser();
        this.userCollection.doc(item.uid).set({
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: item.email,
          function: user.function
        });
      }
    });
  }
}
