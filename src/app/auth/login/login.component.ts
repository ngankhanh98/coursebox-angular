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
    const { username, password } = this.loginForm.value;
    try {
      this.authService.onLogin({ username, password });
      this.authService.onGetMe()
      this.router.navigate(['/dashboard/explore']);
    } catch (error) {
      // TODO: error handling
    }
  }
}
