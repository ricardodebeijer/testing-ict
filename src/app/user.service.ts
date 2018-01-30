import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contact } from './contact';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<Contact>;
  users: Observable<any[]>;
  private userDoc: AngularFirestoreDocument<Contact>;

  constructor(private afs: AngularFirestore) { }

  getAllUsers() {
    this.usersCollection = this.afs.collection('gebruikers');
    this.users = this.usersCollection.snapshotChanges()
      .map(items => {
        return items.map(item => ({ $key: item.payload.doc.id, ...item.payload.doc.data() }));
      });
    return this.users;
  }

  addUser(user) {
    let uid = user.uid

    this.userDoc = this.afs.doc<Contact>('gebruikers/' + uid);

    // console.log('checking to add contact:', this.userDoc)

    if (this.userDoc) {
      // console.log('found')
    } else {
      // console.log('not found')
      let data = {
        username: user.email,
        name: '<displayName>',
        uid: uid
      }
      this.afs.collection('gebruikers').doc(uid).set(data)
    }
   
  }

}
