import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './demo-material/demo-material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { DevUserComponent } from './components/dev-user/dev-user.component';
import { UserSearchButtonComponent } from './components/user-search-button/user-search-button.component';
import { UserSearchModalComponent } from './components/user-search-modal/user-search-modal.component';
import { ConversationService } from './services/conversation.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ConversationPanelComponent } from './components/conversation-panel/conversation-panel.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAAapyesxB8Qa9HawQlvLpONFgbaB_itCA',
  authDomain: 'chat-test-f5bf6.firebaseapp.com',
  databaseURL: 'https://chat-test-f5bf6.firebaseio.com',
  projectId: 'chat-test-f5bf6',
  storageBucket: 'chat-test-f5bf6.appspot.com',
  messagingSenderId: '705274753851'
};

const appRoutes: Routes = [
  {
    path: 'conversation/:id',
    component: ConversationPanelComponent,
  },
  {
    path: '',
    redirectTo: '/conversation/none',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/conversation/none'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ConversationListComponent,
    ConversationPanelComponent,
    MessageListComponent,
    MessageInputComponent,
    DevUserComponent,
    UserSearchButtonComponent,
    UserSearchModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    UserSearchModalComponent
  ],
  providers: [ConversationService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
