import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { FooterComponent, HeaderComponent } from './shared';
import { ModuleWithProviders } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SecurityService } from './security.service';
import { AuthService } from './auth.service';
import { ContactService } from './contact.service';
import { ChatService } from './chat.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [SecurityService],
    children: [
      { path: ':id', component: ChatDetailComponent, outlet: 'chat' },
    ]
  },

  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/overview'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OverviewComponent,
    ChatDetailComponent,
    LoginComponent,
    ContactListComponent,
    UserListComponent,
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
  providers: [AuthService, SecurityService, ContactService, ChatService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
