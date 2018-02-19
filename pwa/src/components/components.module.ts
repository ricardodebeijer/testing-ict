import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
	declarations: [LoginComponent],
	exports: [LoginComponent]
})
export class ComponentsModule { }
