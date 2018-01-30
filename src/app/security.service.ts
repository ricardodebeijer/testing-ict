import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class SecurityService implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isUserEmailLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
