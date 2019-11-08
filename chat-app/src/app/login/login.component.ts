import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authservice: AuthService) {
    this.message = '';
   }

  ngOnInit() {
  }
  
  login(username: string, password: string): boolean { 
    this.message = '';
    if (!this.authservice.login(username, password)) {
      this.message = 'Incorrect credentials.'; 
      setTimeout(function() {
        this.message = ''; 
      }.bind(this), 2500);
    }
    return false; 
  }

  logout(): boolean { 
    this.authservice.logout(); 
    return false;
  }
}
