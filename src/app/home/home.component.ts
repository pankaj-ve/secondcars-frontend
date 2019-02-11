import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public userFirstName:String='';

  constructor() { }

  ngOnInit() {
	  this.userFirstName = localStorage.getItem('user_data') ?  JSON.parse(localStorage.getItem('user_data')).firstName : '';
  }

}
