import { Component } from '@angular/core';

/**
 * Generated class for the AddConversationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-conversation',
  templateUrl: 'add-conversation.html'
})
export class AddConversationComponent {

  text: string;

  constructor() {
    console.log('Hello AddConversationComponent Component');
    this.text = 'add conversation';
  }

}
