import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/observable';
import { User } from 'firebase/app';

describe('AuthService', () => {
  beforeEach(() => {
    class UserServiceStub {
      isLoggedIn: true;
      user: { name: 'Test User' };
    }

    class RouterStub {
      navigate(url: string) { return url; }
    }

    class FirebaseAuthStub {
      signInWithEmailAndPassword(username, password) {
        return new Observable(obj => {
          obj.next(true);
          obj.complete();
        });
      }
    }

    class AngularFireAuthStub {
      readonly auth: FirebaseAuthStub;
      authState: {
        subscribe: () => {}
      };
    }

    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireAuthStub },
        { provide: UserService, useValue: UserServiceStub },
        { provide: Router, useValue: RouterStub }]
    });
  });

  // it('should be created', inject([UserService, Router, AngularFireAuth], (service: AuthService) => {
  //   // expect(service).toBeTruthy();
  //   // expect(service).not.toBeNull();
  // }));

  // it('should login with correct credentials', inject([UserService, Router, AngularFireAuth], (service: AuthService) => {
  //   // const result = service.login('test', 'test');

  //   // expect(result).toBe(true);
  // }));

});
