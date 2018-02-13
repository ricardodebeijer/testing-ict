import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Conversation } from '../../models/Conversation';
import { Observable } from 'rxjs/observable';
import { ConversationProvider } from '../../providers/conversation/conversation';
import { ConversationPage } from '../conversation/conversation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController, public conversationProvider: ConversationProvider, public authenticationProvider: AuthenticationProvider) {

  }


}
