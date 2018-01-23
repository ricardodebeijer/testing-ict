import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { FooterComponent, HeaderComponent,SharedModule } from './shared';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatModule } from './chat/chat.module';

export const firebaseConfig = {
  apiKey: "AIzaSyAAapyesxB8Qa9HawQlvLpONFgbaB_itCA",
  authDomain: "chat-test-f5bf6.firebaseapp.com",
  databaseURL: "https://chat-test-f5bf6.firebaseio.com",
  projectId: "chat-test-f5bf6",
  storageBucket: "chat-test-f5bf6.appspot.com",
  messagingSenderId: "705274753851"
};

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    rootRouting,
    ChatModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
