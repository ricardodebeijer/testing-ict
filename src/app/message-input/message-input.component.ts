import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  msgValue = '';
  @Input() id: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(content) {
    console.log('sending message to ', this.id, ':', content)
    this.messageService.sendMessage(this.id, content);
    this.msgValue = '';
  }

}
