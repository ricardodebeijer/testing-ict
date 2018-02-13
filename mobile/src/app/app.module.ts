import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConversationProvider } from '../providers/conversation/conversation';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { UserProvider } from '../providers/user/user';
import { ConversationPage } from '../pages/conversation/conversation';
import { LoginPage } from '../pages/login/login';
import { AddConversationComponent } from '../components/add-conversation/add-conversation';
import { ConversationListComponent } from '../components/conversation-list/conversation-list';
import { MessageInputComponent } from '../components/message-input/message-input';
import { MessageListComponent } from '../components/message-list/message-list';


export const firebaseConfig = {
  apiKey: 'AIzaSyAAapyesxB8Qa9HawQlvLpONFgbaB_itCA',
  authDomain: 'chat-test-f5bf6.firebaseapp.com',
  databaseURL: 'https://chat-test-f5bf6.firebaseio.com',
  projectId: 'chat-test-f5bf6',
  storageBucket: 'chat-test-f5bf6.appspot.com',
  messagingSenderId: '705274753851'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConversationPage,
    LoginPage,
    AddConversationComponent,
    ConversationListComponent,
    MessageInputComponent,
    MessageListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConversationPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConversationProvider,
    AuthenticationProvider,
    UserProvider
  ]
})
export class AppModule {}
