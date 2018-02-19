import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserProvider } from '../user/user';
import { User } from '../../models/User';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  user: Observable<any>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(private afa: AngularFireAuth, private userProvider: UserProvider) {
    this.afa.authState.subscribe(res => {
      if (res && res.uid) {
        this.userDoc = this.userProvider.getUserById(res.uid);
        this.user = new Observable(observer => observer.next(this.userDoc));
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

  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password)
      .then((item) => {     
        return true;
      }).catch((err) => {
        return false;
      });
  }

  logout() {
    this.afa.auth.signOut();
  }
}
