import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.popToRoot();
  }

 
}
