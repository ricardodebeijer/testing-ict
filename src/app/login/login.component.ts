import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contact } from '../contact';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

   }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  onSignUp(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/overview'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }

  onLoginEmail(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/overview']))
        .catch(_error => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }

  logout() {
    this.authService.signOut();
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false
    }

    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!'
      return false
    }

    this.errorMessage = ''

    return true
  }

}
