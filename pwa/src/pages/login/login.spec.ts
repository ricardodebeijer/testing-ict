import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginPage } from './login';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavParamsMock, NavMock } from '../../../test-config/mocks-ionic';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MyApp } from '../../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Login Component', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let nav: NavController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp, LoginPage],
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
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        nav = TestBed.get(NavController);
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

        component.login();

        expect(nav.push).not.toHaveBeenCalled()
    });

    it('should redirect with credentials', () => {
        spyOn(nav, 'push');

        component.usernameValue = 'test';
        component.passwordValue = '1234'
        component.login();

        expect(nav.push).toHaveBeenCalled()
    });
});
