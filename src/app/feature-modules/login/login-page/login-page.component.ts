import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  message = "Welcome to Login Page";
  messageColor = "white";
  salary = 200;
  // birthday = '12/17/1993';
  userInfo = {
    email: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.router.navigateByUrl('app/signup');
  }

  onLogin() {
    localStorage.setItem('mode', 'admin');
    //localStorage.setItem('mode', 'user');
    sessionStorage.setItem('type', 'admin');
    this.router.navigateByUrl('library');
  }

}
