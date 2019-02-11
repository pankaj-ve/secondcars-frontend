import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:Object = {};
  public loader;
  public errorMsg;
  public sucsMsg;

  constructor(private authService:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user).subscribe(
      (result)=>{
        if(!result){
          this.errorMsg = 'Internal server error.';
        }
        else{
          if(result &&result['statusCode']==200){
            localStorage.setItem('user_data', JSON.stringify(result['result']));
            this._router.navigate(['profile']);
          }
          else{
            this.errorMsg = result['statusMessage'];
          }

        }
        
      },
      (error)=>{ }
    );
  }
}
