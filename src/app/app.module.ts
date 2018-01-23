import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

export const firebaseConfig = {
  apiKey: "AIzaSyAAapyesxB8Qa9HawQlvLpONFgbaB_itCA",
  authDomain: "chat-test-f5bf6.firebaseapp.com",
  databaseURL: "https://chat-test-f5bf6.firebaseio.com",
  projectId: "chat-test-f5bf6",
  storageBucket: "chat-test-f5bf6.appspot.com",
  messagingSenderId: "705274753851"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
