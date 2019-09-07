import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule}  from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainningComponent } from './trainning/trainning.component';
import { CurrentTrainingComponent } from './trainning/current-training/current-training.component';
import { PastTrainingComponent } from './trainning/past-training/past-training.component';
import { NewTrainingComponent } from './trainning/new-training/new-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    TrainningComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    NewTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
