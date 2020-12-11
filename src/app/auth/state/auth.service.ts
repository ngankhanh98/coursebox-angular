import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // auth: AuthState
  token: string;
  constructor(private http: HttpClient, private authStore: AuthStore) {}

  public onLogin({ username, password }) {
    this.http
      .post('http://localhost:3000/v1/auth/login', {
        username: username,
        password: password,
      })
      .subscribe((response) => {
        console.log('response[]', response['accessToken']);
        this.token = response['accessToken'];
      });
  }

  public onGetMe() {
    this.http
      .get<Auth>('http://localhost:3000/v1/user/me', {
        headers: { 'access-token': this.token },
      })
      .subscribe((response) => {
        const res: Auth = { ...response, token: this.token };
        this.authStore.add(res);
      });
  }
}
