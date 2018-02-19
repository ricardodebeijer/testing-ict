import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/observable';
import { User } from '../../models/User';
import { ViewController } from 'ionic-angular';
import { ConversationProvider } from '../../providers/conversation/conversation';
/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html'
})
export class UserListComponent {
  users: Observable<any>;

  constructor(
    public conversationProvider: ConversationProvider,
    public userProvider: UserProvider,
    public viewCtrl: ViewController) {
    this.users = userProvider.getAllUsers();
  }

  startConversation(user: User) {
    // console.log('start converation with ' + user.username + ', (' + user.id + ')');
    this.conversationProvider.startConversationWithUser(user.id)
    this.viewCtrl.dismiss()
  }

}
