import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  userId: string;

  constructor() { }


  setCurrentUserId(id: string) {
    this.userId = id
  }

  getCurrentUserId() {
    return this.userId;
  }
}
