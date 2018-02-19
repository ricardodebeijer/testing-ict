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
import { LoginComponent } from '../../components/login/login';
import { AuthProvider } from '../../providers/auth/auth';

describe('Login Page', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let nav: NavController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MyApp,
                LoginPage,
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
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        nav = TestBed.get(NavController);
    });

    it('should create component', () => {
        expect(component).toBeDefined()
    });



});
