import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  constructor() {
  }

  login(username: string, password: string): boolean {
    if (username && password) {
      //call fireauth
      return true;
    } else {
      return false
    }
  }
}
