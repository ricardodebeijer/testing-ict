import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  private userId: string;

  constructor(private afa: AngularFireAuth, private userService: UserService) { }

  getCurrentUserId() {
    return this.userId;
  }

    getCurrentUser() {
    return this.userService.getUserById(this.userId);
  }

  getAuthState() {
    return this.afa.authState;
  }

  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password).then((item) => {
      this.userId =  item.uid;
      this.userService.addUserIfNotExisting(item);
      return true;
    });
  }

  logout() {
    this.afa.auth.signOut();
  }

}
