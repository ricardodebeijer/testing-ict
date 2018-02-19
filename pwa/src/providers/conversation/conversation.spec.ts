import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ConversationProvider } from './conversation';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavParamsMock, NavMock } from '../../../test-config/mocks-ionic';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MyApp } from '../../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { firebaseConfig } from '../../config';
import { UserProvider } from '../../providers/user/user';

describe('Converation Provider', () => {
    let component: ConversationProvider;
    let afs: AngularFirestore;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule,
                AngularFireStorageModule
            ],
            providers: [
                ConversationProvider,
            ]
        });
    }));

    beforeEach(() => {
        component = TestBed.get(ConversationProvider);
        afs = TestBed.get(AngularFirestore);
    });
    it('should create provider', () => {
        expect(component).toBeDefined()
    });


});
