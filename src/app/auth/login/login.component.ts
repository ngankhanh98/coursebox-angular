import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    const loginInfo = this.loginForm.value;
    console.log('loginInfo', loginInfo);
    try {
      this.authService.onLogin(loginInfo);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log('error', error);
    }
  }
}
