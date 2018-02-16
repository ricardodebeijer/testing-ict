import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usernameValue: string;
  passwordValue: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usernameValue = ''
    this.passwordValue = ''
  }

  login() {
    if (this.usernameValue === 'test' && this.passwordValue === '1234') {
      this.navCtrl.push(HomePage)
    }
  }
}
