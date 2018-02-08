import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { User } from '../user';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable()
export class AuthService {
  userDoc: AngularFirestoreDocument<User>;
  userId;
  constructor(private afa: AngularFireAuth,
    private userService: UserService,
    private router: Router) {

    this.afa.authState.subscribe(res => {
      if (res && res.uid) {
        this.userDoc = this.userService.getUserById(res.uid);
        console.log('user is logged in');
      } else {
        console.log('user not logged in');
      }
    });
  }

  getCurrentUserId() {
    if (!this.userDoc) {
      return null;
    }
    return this.userDoc.ref.id;
  }

  getCurrentUser() {
    return this.userDoc;
  }

  getFirebaseUser() {
    return this.afa.authState;
  }

  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password).then((item) => {
      this.userService.addUserIfNotExisting(item);
      return true;
    });
  }

  logout() {
    this.afa.auth.signOut();
  }

}
