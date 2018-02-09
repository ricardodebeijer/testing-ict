import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ConversationService } from '../../services/conversation.service';
import { AuthService } from '../../services/auth.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-dev-user',
  templateUrl: './dev-user.component.html',
  styleUrls: ['./dev-user.component.css']
})
export class DevUserComponent implements OnInit, OnChanges {
  currentuser: Observable<any>;
  @Input() childUserId: string;

  constructor(
    public authService: AuthService,
    private router: Router) {
    // console.log('authservice', this.authService);
    this.updateUser();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    // console.log('dev user changed', this.childUserId);
    this.updateUser();
  }
  updateUser() {
    const temp = this.authService.getCurrentUser();
    // console.log('temp', temp);
    if (temp) {
      // console.log('temp is valid', temp);
      this.currentuser = temp.valueChanges();
    } else {
      if (this.childUserId) {
        // console.log('set id', this.childUserId);
        this.authService.setUser(this.childUserId);
        // console.log('getting user');
        this.currentuser = this.authService.getCurrentUser().valueChanges();
      }
    }
    // console.log('currentuser', this.currentuser);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
