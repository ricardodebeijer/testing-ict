import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Observable<any[]>;
  constructor(private messageService: MessageService) { }
  @Input() id: string;
  ngOnInit() {
    if (this.id) {
      // console.log('getting messages for: ', this.id)
      this.messages = this.messageService.getMessagesForContact(this.id)
    }
  }

}
