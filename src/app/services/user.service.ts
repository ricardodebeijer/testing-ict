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
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    this.userCollection = this.afs.collection('users');
    this.users = this.userCollection.valueChanges();
  }

  getCurrentUser() {
    const currentId = this.authService.getCurrentUserId();
    return this.getUserById(currentId);
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

  generateTestUsers() {
    UserMock.generateTestUsers(10).forEach((item) => {
      this.userCollection.add(item);
    });

    this.userCollection.doc(this.authService.getCurrentUserId()).set({
      firstname: 'Ricardo',
      lastname: 'de Beijer',
      username: 'ricardodebeijer',
      email: 'ricardo.de.beijer@ict.nl',
      function: 'Graduate'
    });
  }
}
