import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHelper } from 'app/@core/helpers/http.helper';
import { Auth } from './auth';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string;
  constructor(
    private http: HttpClient,
    private authStore: AuthStore,
    private httpHelper: HttpHelper
  ) {}

  public onLogin({ username, password }) {
    const route = '/auth/login';
    const data = { username: username, password: password };
    const storeToken = (res) => (this.token = res['accessToken']);

    return this.httpHelper._postData(route, data, {}, storeToken);
  }

  public onGetMe() {
    const route = '/user/me';
    const header = { 'access-token': this.token };
    const addMyInfoToState = (response) => {
      const res: Auth = { ...response, token: this.token };
      this.authStore.add(res);
    };

    return this.httpHelper._fetchData(route, header, addMyInfoToState);
  }
}
