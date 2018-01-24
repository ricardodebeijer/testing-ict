import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { FooterComponent, HeaderComponent } from './shared';
import { ModuleWithProviders } from '@angular/core';
import { ChatOverviewComponent } from './chat-overview/chat-overview.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { RouterModule, Routes } from '@angular/router';

export const firebaseConfig = {
  apiKey: "AIzaSyAAapyesxB8Qa9HawQlvLpONFgbaB_itCA",
  authDomain: "chat-test-f5bf6.firebaseapp.com",
  databaseURL: "https://chat-test-f5bf6.firebaseio.com",
  projectId: "chat-test-f5bf6",
  storageBucket: "chat-test-f5bf6.appspot.com",
  messagingSenderId: "705274753851"
};

const appRoutes: Routes = [
  {
    path: 'chat/:id',
    component: ChatDetailComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ChatOverviewComponent,
    ChatDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
