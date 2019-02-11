import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userFirstName:string;
  userData:Object;
  constructor() { }

  ngOnInit() {
    this.userFirstName = localStorage.getItem('user_data') ?  JSON.parse(localStorage.getItem('user_data')).firstName : '';
    this.userData = JSON.parse(localStorage.getItem('user_data'));
    console.log(this.userData,'this is testing part');
  }
  

}
