import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthQuery } from '../state/auth.query';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  error$ = this.authQuery.selectError();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private authQuery: AuthQuery) {}

  ngOnInit(): void {}

  login() {
    this.loading = true;
    const { username, password } = this.loginForm.value;
    this.authService.login({ username, password });

    this.error$.subscribe((res) => {
      if (res) this.loading = false;
    });
  }
}
