import { ModuleWithProviders, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ChatService } from '../chat.service';

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

  constructor(private afs: AngularFirestore, private chatService: ChatService, private route: ActivatedRoute) {
    // this.route.params.subscribe(params => {
    //   this.docuId = params['id'];
    //   console.log('params detail',this.docuId)
    //   this.ngOnInit()
    // });

    // this.route.parent.params.subscribe(params => {
    //   console.log('params parent',params)
    // });

    // console.log(this.route)
    // this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {

    if (this.docuId) {
      console.log('nginit docId ok')
      this.contactDoc = this.afs.doc<Contact>('contacts/' + this.docuId);
      this.contact = this.contactDoc.valueChanges();

      this.messages = this.chatService.getMessagesForChat(this.contactDoc);
      this.isContactSelected = true;
    } else {
      // console.log('nginit docId null')
      this.isContactSelected = false;
    }
  }

}
