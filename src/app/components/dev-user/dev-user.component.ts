import { Component, OnInit } from '@angular/core';
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
export class DevUserComponent implements OnInit {
  contacts: Observable<any[]>;

  constructor(
    public authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
