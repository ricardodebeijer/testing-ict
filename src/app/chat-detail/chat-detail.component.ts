import { ModuleWithProviders, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  private contactDoc: AngularFirestoreDocument<Contact>;
  private messageCollection: AngularFirestoreCollection<Contact>;
  contact: Observable<Contact>;
  messages: Observable<any[]>;
  docuId: string;
  msgVal: string;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.docuId = params['id'];
      console.log(this.docuId)
      this.ngOnInit()
    });
  }

  ngOnInit() {
    this.contactDoc = this.afs.doc<Contact>('contacts/' + this.docuId);
    this.contact = this.contactDoc.valueChanges();

    this.messageCollection = this.contactDoc.collection('messages',
      ref => ref.orderBy('datetime', 'asc').limit(10));
    this.messages = this.messageCollection.valueChanges();
  }

  chatSend(message) {
    this.msgVal = '';
    this.contactDoc.collection('messages').add({content: message, datetime: Date()})
  }
}
