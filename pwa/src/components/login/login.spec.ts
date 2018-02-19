import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavParamsMock, NavMock } from '../../../test-config/mocks-ionic';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MyApp } from '../../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthProvider } from '../../providers/auth/auth';

describe('Login Component', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let nav: NavController;
    let auth: AuthProvider;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MyApp,
                LoginComponent
            ],
            imports: [
                BrowserModule,
                MaterialModule,
                FormsModule,
                BrowserAnimationsModule,
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavParamsMock },
                AuthProvider
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        nav = TestBed.get(NavController);
        auth = TestBed.get(AuthProvider);
    });

    it('should create component', () => {
        expect(component).toBeDefined()
    });

    it('should have no default password or username', () => {
        expect(component.passwordValue).toBe('')
        expect(component.usernameValue).toBe('')
    });

    it('should not redirect when nothing is entered', () => {
        spyOn(nav, 'push');
        spyOn(auth, 'login');

        component.login();

        expect(nav.push).not.toHaveBeenCalled()
        expect(auth.login).toHaveBeenCalled()
    });

    it('should redirect with credentials', () => {
        spyOn(auth, 'login').and.returnValue(true);
        spyOn(nav, 'push');

        component.usernameValue = 'test';
        component.passwordValue = '1234'
        component.login();

        expect(nav.push).toHaveBeenCalled()
        expect(auth.login).toHaveBeenCalled()
    });

});



