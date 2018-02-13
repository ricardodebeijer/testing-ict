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
  user: Observable<any>;
  userDoc: AngularFirestoreDocument<User>;
  userId;
  constructor(private afa: AngularFireAuth,
    private userService: UserService,
    private router: Router) {

    this.user = new Observable();

    this.afa.authState.subscribe(res => {
      if (res && res.uid) {
        // console.log('user uid', res.uid);
        this.userDoc = this.userService.getUserById(res.uid);
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
  setUser(uid) {
    this.userDoc = this.userService.getUserById(uid);
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
