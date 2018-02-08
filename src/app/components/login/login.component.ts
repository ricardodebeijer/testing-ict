import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login(username) {
    // console.log('username', username);
    let email = '';
    if (username) {
      email = username + '@ict.nl';
      // console.log('selected', email);
    } else {
      email = 'ricardodebeijer@ict.nl';
    }

    this.authService.login(email, '123456').then((result) => {
      if (result) {
        // console.log('redirecting to ', this.returnUrl);
        this.router.navigate([this.returnUrl]);
      } else {

      }
    });
  }
}
