import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserProvider } from '../user/user';
import { User } from '../../models/User';
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  user: Observable<any>;
  userDoc: AngularFirestoreDocument<User>;
  userId;

  constructor(private afa: AngularFireAuth, private userProvider: UserProvider) {
    this.afa.authState.subscribe(res => {
      if (res && res.uid) {
        // console.log('user uid', res.uid);
        this.userDoc = this.userProvider.getUserById(res.uid);
        this.user = new Observable(observer => observer.next(this.userDoc));
        // console.log('user is logged in', this.userDoc);
      } else {
        console.log('user not logged in');
      }
    });
  }

  getCurrentUserId() {
    if (!this.userDoc) {
      return;
    }
    return this.userDoc.ref.id;
  }

  getCurrentUser() {
    if (!this.userDoc) {
      return;
    }
    return this.userDoc;
  }

  getFirebaseUser() {
    return this.afa.authState;
  }

  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password).then((item) => {
      // this.userProvider.addUserIfNotExisting(item);
      return true;
    });
  }

  logout() {
    this.afa.auth.signOut();
  }
  

}
