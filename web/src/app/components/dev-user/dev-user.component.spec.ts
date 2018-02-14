import { DevUserComponent } from './dev-user.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

class RouterStub {
  navigate(url: string) { return url; }
}

class AuthServiceStub {
  user: any;
  getCurrentUser() {
    this.user = new AngularFirestoreDocument(null);
    return this.user;
  }
  logout() {
  }
}


describe('DevUserComponent', () => {
  let component: DevUserComponent;
  let fixture: ComponentFixture<DevUserComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevUserComponent],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub },
      ]
    });
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevUserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    spyOn(authService, 'logout');
    spyOn(router, 'navigate');

    component.logout();
    expect(authService.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();

  });
});
