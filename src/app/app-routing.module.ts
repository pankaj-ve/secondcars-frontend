import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuardService } from './user-auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {   
    path: '', 
    component: HomeComponent
  },
  {   
    path: 'home', 
    component: HomeComponent
  },
  {   
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [UserAuthGuardService]
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent
  },
  { 
    path: 'forgot-password', 
    component: ForgotPasswordComponent
  },
  { 
    path: 'authentication/verify-email-link', 
    component: ResetPasswordComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
