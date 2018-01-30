import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
  }

}
