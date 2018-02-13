import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class WindowService {
  private winref: Window;
  private child: Window;

  constructor(private authService: AuthService) {
    this.winref = window;
  }
  getNativeWindow() {
    return this.winref;
  }

  createChildWindow(convId) {
    const ids = convId + ',' + this.authService.getCurrentUserId();
    this.winref.open('childpanel', ids, 'width=600,height=500,0,status=1,');
  }


}
