import { NgModule } from '@angular/core';
import { MessageListComponent } from './message-list/message-list';
import { MessageInputComponent } from './message-input/message-input';
import { ConversationListComponent } from './conversation-list/conversation-list';
import { AddConversationComponent } from './add-conversation/add-conversation';
@NgModule({
	declarations: [MessageListComponent,
    MessageInputComponent,
    ConversationListComponent,
    AddConversationComponent],
	imports: [],
	exports: [MessageListComponent,
    MessageInputComponent,
    ConversationListComponent,
    AddConversationComponent]
})
export class ComponentsModule {}
