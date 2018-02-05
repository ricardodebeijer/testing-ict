import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './demo-material/demo-material.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ContactService } from './contact.service';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { DevUserComponent } from './dev-user/dev-user.component';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchModalComponent } from './user-search-modal/user-search-modal.component';
import { AuthService } from './auth.service';

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
    path: 'chat/:id',
    component: ChatDetailComponent,
  },
  {
    path: '',
    redirectTo: '/chat/none',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/chat/none'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ChatDetailComponent,
    MessageListComponent,
    MessageInputComponent,
    DevUserComponent,
    UserListComponent,
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
  providers: [ContactService, MessageService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
