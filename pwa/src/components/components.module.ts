import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversationListComponent } from './conversation-list/conversation-list';
import { ConversationComponent } from './conversation/conversation';
import { MessageListComponent } from './message-list/message-list';
import { MessageInputComponent } from './message-input/message-input';
import { UserListComponent } from './user-list/user-list';
import { AttachmentUploaderComponent } from './attachment-uploader/attachment-uploader';
@NgModule({
    declarations: [
        LoginComponent,
        ConversationListComponent,
    ConversationComponent,
    MessageListComponent,
    MessageInputComponent,
    UserListComponent,
    AttachmentUploaderComponent
    ],
    exports: [
        LoginComponent,
        ConversationListComponent,
    ConversationComponent,
    MessageListComponent,
    MessageInputComponent,
    UserListComponent,
    AttachmentUploaderComponent
    ]
})
export class ComponentsModule { }
