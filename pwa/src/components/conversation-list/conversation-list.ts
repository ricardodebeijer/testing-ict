import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../../pages/conversation/conversation';

/**
 * Generated class for the ConversationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'conversation-list',
  templateUrl: 'conversation-list.html'
})
export class ConversationListComponent {

  constructor(public navCtrl: NavController) {

  }

  navToConversation(id){
    this.navCtrl.push(ConversationPage,id);
  }

}
