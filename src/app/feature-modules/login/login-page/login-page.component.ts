import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  message = "welcome to login page";
  messageColor = "white";
  salary = 200;
  birthday = '12/17/1993'; //MM/DD/YYYY
  userInfo = {
    userEmail: '',
    userPassword: ''
  }

  userEmail = ""
  userPassword = ''
  loginForm: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email-info': new FormControl(""),
      'password': new FormControl("")
    });
  }

  onRegister() {
    this.router.navigateByUrl('app/signup');
  }

  onSubmit(data) {
    console.info(data.value)
  }

  onLogin() {
    let response = {
      email: this.userEmail,
      password: this.userPassword
    }

    localStorage.setItem('mode', 'admin');
    //localStorage.setItem('mode', 'user');
    sessionStorage.setItem('type', 'admin');
    this.router.navigateByUrl('library');
  }

}
