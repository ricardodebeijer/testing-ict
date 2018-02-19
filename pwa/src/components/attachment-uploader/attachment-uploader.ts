import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Conversation } from '../../models/Conversation';
import { ConversationProvider } from '../../providers/conversation/conversation';

/**
 * Generated class for the AttachmentUploaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attachment-uploader',
  templateUrl: 'attachment-uploader.html'
})
export class AttachmentUploaderComponent {
  @Input() conversation: Conversation;
  msgValue: string;

  constructor(public conversationProvider: ConversationProvider) {
  }

  

}
