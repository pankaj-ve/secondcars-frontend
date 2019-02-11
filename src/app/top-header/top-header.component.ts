import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

	public userFirstName:String='';

  constructor(private authService:AuthService) { }

  ngOnInit() {
	  this.userFirstName = localStorage.getItem('user_data') ?  JSON.parse(localStorage.getItem('user_data')).firstName : '';
  }
  
  logout(){
    this.authService.logout();
  }

}
