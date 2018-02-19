import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  usernameValue: string;
  passwordValue: string;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    this.usernameValue = ''
    this.passwordValue = ''
  }

  login() {
      if (this.authProvider.login(this.usernameValue, this.passwordValue)) {
        this.navCtrl.push(HomePage)
      }
  }

}
