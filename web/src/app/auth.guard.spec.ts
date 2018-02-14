import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  beforeEach(() => {
    class AuthServiceStub {
      isLoggedIn: true;
      user: { name: 'Test User' };
    }

    class RouterStub {
      navigate(url: string) { return url; }
    }

    TestBed.configureTestingModule({
      providers: [AuthGuard,
        { provide: AuthService, useValue: AuthServiceStub },
        { provide: Router, useValue: RouterStub }],
    });
  });

  it('should create an instance', inject([AuthGuard, AuthService, Router], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

});
