import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private authStore: AuthStore) {}

  public onLogin({ username, password }) {
    return this.http
      .post('http://localhost:3000/v1/auth/login', {
        username: username,
        password: password,
      })
      .subscribe((response) => {
        this.authStore.add({
          username: username,
          token: response['accessToken']
        });
      });
  }
}
