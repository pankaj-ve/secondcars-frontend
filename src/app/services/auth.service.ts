import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {httpReqeustService} from './http-request.service';

@Injectable()
export class AuthService {
  constructor(private _router: Router, private http: httpReqeustService){}
  
  logout() {
    localStorage.removeItem('user_data');
    this._router.navigate(['login']);
  }

  // login user
  login(user){
    let data = { email: user['email'], password: user['password']};
    return   this.http.post('auth/login',data) 
  }

  // register api
  signup(user){
    return this.http.post('auth/signup',user,{});
  }
  // reset password---
  resetPassword(email,token, password){
    let data ={ email: email, password: password.password,token:token};
    return this.http.put("auth/reset-password",data);
    
  }
  
  verifyForgotLink(email,token) {
    return this.http.get(`auth/verify-forgot-link?email=${email}&token=${token}`);
  }

  // forgot password
  forgotPassword(user){
    let data = { email: user['email']};
    return this.http.post("auth/forgot-password",data);
    
  }


}