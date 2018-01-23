import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Message {
    message: string;
    datetime: Date;
}

interface Contact {
    name: string;
    fromMessages: Message[];
    toMessages: Message[];
}


@Component({
    selector: 'chat-page',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {
    contactsCollection: AngularFirestoreCollection<Contact>;
    contacts: Observable<Contact[]>;

    // selectedChat: string;
    // message: string;


    constructor(private afs: AngularFirestore) { }


    ngOnInit() {
        this.contactsCollection = this.afs.collection('contacts');
        this.contacts = this.contactsCollection.valueChanges();
    }

    addPost() {
        // this.afs.collection('contacts').add({ 'title': this.title, 'content': this.content });
    }
}