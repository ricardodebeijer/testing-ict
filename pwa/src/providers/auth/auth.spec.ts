import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AuthProvider } from './auth';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavParamsMock, NavMock } from '../../../test-config/mocks-ionic';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MyApp } from '../../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProvider } from '../user/user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { firebaseConfig } from '../../config';

describe('Auth Provider', () => {
    let component: AuthProvider;
    let user: UserProvider;
    let afa: AngularFireAuth;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule,
                AngularFireStorageModule
            ],
            providers: [
                AuthProvider,
                UserProvider
            ]
        });
    }));

    beforeEach(() => {
        component = TestBed.get(AuthProvider);
        afa = TestBed.get(AngularFireAuth);
        user = TestBed.get(UserProvider);
    });


    it('should create provider', () => {
        expect(component).toBeDefined()
    });

    it('should not login with no credentials', () => {
        // spyOn(afa.auth, 'signInWithEmailAndPassword').and.returnValue(false)

        component.login('', '')

        // expect(afa.auth.signInWithEmailAndPassword).toHaveBeenCalled()
    });
    
    it('should login with credentials', () => {
        // spyOn(afa.auth, 'signInWithEmailAndPassword').and.returnValue(true)

        component.login('username', 'password')

        // expect(afa.auth.signInWithEmailAndPassword).toHaveBeenCalled()
    });


});
