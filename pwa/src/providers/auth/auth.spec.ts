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

describe('Auth Provider', () => {
    let component: AuthProvider;

    beforeEach(() => {
        component = new AuthProvider()
    });

    it('should create provider', () => {
        expect(component).toBeDefined()
    });

    it('should not login with no credentials', () => {
        expect(component.login('','')).toBe(false)
    });
    it('should not login with no credentials', () => {
        expect(component.login('a','b')).toBe(true)
    });


});
