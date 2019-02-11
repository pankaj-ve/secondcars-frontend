import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SignupComponent } from './signup/signup.component';

import { AuthService } from './services/auth.service';
import { httpReqeustService } from './services/http-request.service';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FooterComponent } from './footer/footer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopHeaderComponent,
    SignupComponent,
    ForgotPasswordComponent,
    FooterComponent,
    ResetPasswordComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,httpReqeustService],
  bootstrap: [AppComponent]
})
export class AppModule { }
