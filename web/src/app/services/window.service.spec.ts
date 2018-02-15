import { WindowService } from './window.service';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from './auth.service';

class AuthServiceStub {
  getCurrentUserId() {
    return 1;
  }

}

describe('Service: My: TestBed', () => {
  let windowService: WindowService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WindowService,
        { provide: AuthService, useClass: AuthServiceStub }
      ]
    });

    windowService = TestBed.get(WindowService);
    authService = TestBed.get(AuthService);
  });

  it('should create an instance', () => {
    expect(windowService).toBeDefined();
  });

  it('should get the current window', () => {
    const result = windowService.getNativeWindow();
    expect(result).toBeTruthy();
  });

  xit('should create a child window', () => {
    spyOn(authService, 'getCurrentUserId');
    windowService.createChildWindow(1);
    expect(authService.getCurrentUserId).toHaveBeenCalled();
  });
});
