import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contact } from './contact';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable()
export class ContactService {
  private contactDoc: AngularFirestoreDocument<Contact>;
  myContactsCollection: AngularFirestoreCollection<Contact>;
  myContacts: Observable<any[]>;
  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  getContactsForUser(uid: string) {
    this.myContactsCollection = this.afs.collection('gebruikers').doc(uid).collection('contacten');
    this.myContacts = this.myContactsCollection.valueChanges()
    // .map(items => {
    //   return items.map(item => ({ $key: item.payload.doc.id, ...item.payload.doc.data() }));
    // });;
    return this.myContacts;
  }


  getContact(uid) {
    this.contactDoc = this.afs.collection('gebruikers')
      .doc(this.authService.currentUserId)
      .collection('contacten')
      .doc<Contact>(uid)
    return this.contactDoc.valueChanges();
  }

  addContactToUser(currentUid, contactUid) {
    let user = this.afs.doc<Contact>('gebruikers/' + currentUid);
    let contact = this.afs.doc<Contact>('gebruikers/' + contactUid);
    let item = contact.valueChanges().subscribe(item => {
      // console.log(item)
      user.collection('contacten').doc(contactUid).set({
        user: contact.ref,
        name: item.name,
        uid: item.uid
      })
    }
    )
  }

}
