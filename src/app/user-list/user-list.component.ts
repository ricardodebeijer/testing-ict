import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contact } from '../contact';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router/src/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<any[]>;

  constructor(public userService: UserService, private contactService:ContactService, public authService: AuthService) {
  }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

  addToMyContacts(uid) {
    // console.log('adding', uid, 'to your contacts')
    this.contactService.addContactToUser(this.authService.currentUserId,uid)
  }
  isSelf(uid) {
    return this.authService.currentUserId === uid;
  }


}
