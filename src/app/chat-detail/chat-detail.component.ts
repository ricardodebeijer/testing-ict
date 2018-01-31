import { ModuleWithProviders, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { concat } from 'rxjs/operators';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ChatService } from '../chat.service';
import { AuthService } from '../auth.service';
import { ContactService } from '../contact.service';
import { merge } from 'rxjs/operators/merge';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {

  contact: Observable<Contact>;
  mymessages: Observable<any[]>;
  messages: Observable<any[]>;
  both: Observable<any[]>;
  docuId: string;
  msgVal: string;
  isContactSelected: boolean;

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private contactService: ContactService,
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
      this.contact = this.contactService.getContact(this.docuId)
      this.mymessages = this.chatService.getMyMessagesForChat(this.docuId)
      this.messages = this.chatService.getMessagesForChat(this.docuId)

      this.isContactSelected = true;
    } else {
      // console.log('nginit docId null')
      this.isContactSelected = false;
    }
  }

  sendMessage(message) {
    console.log('sending message to ', this.docuId, ' :', message)
    this.chatService.sendMessage(this.docuId, message)
    this.msgVal = ''
  }

}
