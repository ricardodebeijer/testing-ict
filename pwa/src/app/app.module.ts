import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { firebaseConfig } from '../config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ConversationProvider } from '../providers/conversation/conversation';
// import { LoginComponent } from '../components/login/login';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from '../components/login/login';
import { ConversationListComponent } from '../components/conversation-list/conversation-list';
import { ConversationComponent } from '../components/conversation/conversation';
import { MessageListComponent } from '../components/message-list/message-list';
import { MessageInputComponent } from '../components/message-input/message-input';
import { ConversationPage } from '../pages/conversation/conversation';
import { StartConversationModalPage } from '../pages/start-conversation-modal/start-conversation-modal';
import { UserListComponent } from '../components/user-list/user-list';
import { TimeAgoPipe } from '../pipes/timeago/timeago';
import '../../rxjs-operators'
import { AttachmentUploaderComponent } from '../components/attachment-uploader/attachment-uploader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConversationPage,
    StartConversationModalPage,
    LoginComponent,
    ConversationListComponent,
    ConversationComponent,
    MessageListComponent,
    MessageInputComponent,
    UserListComponent,
    AttachmentUploaderComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ConversationPage,
    StartConversationModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    UserProvider,
    ConversationProvider
  ]
})
export class AppModule { }
