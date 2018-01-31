import { ModuleWithProviders, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ChatService } from '../chat.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  private contactDoc: AngularFirestoreDocument<Contact>;
  contact: Observable<Contact>;
  messages: Observable<any[]>;
  docuId: string;
  msgVal: string;
  isContactSelected: boolean;

  constructor(
    private afs: AngularFirestore,
    private chatService: ChatService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.docuId = params['id'];
      // console.log('params detail',this.docuId)
      this.ngOnInit()
    });

  }

  ngOnInit() {

    if (this.docuId) {
      // console.log('nginit docId ok')

      this.contactDoc = this.afs.collection('gebruikers')
        .doc(this.authService.currentUserId)
        .collection('contacten')
        .doc<Contact>(this.docuId)
      this.contact = this.contactDoc.valueChanges();

      this.messages = this.chatService.getMessagesForChat(this.contactDoc)
      this.isContactSelected = true;
    } else {
      // console.log('nginit docId null')
      this.isContactSelected = false;
    }
  }

  sendMessage(message) {
    console.log('sending message to ', this.docuId, ' :', message)
    this.chatService.sendMessage(this.contactDoc, message)
    this.msgVal = ''
  }

}
