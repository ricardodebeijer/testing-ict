import { LoginComponent } from './login.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { DemoMaterialModule } from '../../demo-material/demo-material.module';
import { FormsModule } from '@angular/forms';

class RouterStub {
  navigate(url: string) { return url; }
}

class AuthServiceStub {
  user: any;
  getCurrentUser() {
    this.user = new AngularFirestoreDocument(null);
    return this.user;
  }
  login(username, password) {
    return new Promise(function (resolve, reject) {
      resolve(true);
    });
  }
}

class ActivatedRouteStub {
  params = new Observable(observer => {
    observer.next({ id: '1234' });
    observer.complete();
  });
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        DemoMaterialModule,
        FormsModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    });
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    // spyOn(authService, 'login');
    // component.login();
    // expect(authService.login).toHaveBeenCalled();
  });
});

