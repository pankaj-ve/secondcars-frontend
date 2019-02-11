import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user : Object={};
  public loading = false;
  public errorMsg;
  constructor(private _router: Router, private authService:AuthService) { }

  ngOnInit() {
  }

  signup(){
    this.authService.signup(this.user).subscribe(
      (result)=>{
        if(!result){
          this.errorMsg = 'Internal server error.';
        }
        else{
          if(result &&result['statusCode']==200){
            localStorage.setItem('user_data', JSON.stringify(result['statusCode']));
            this._router.navigate(['home']);
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
