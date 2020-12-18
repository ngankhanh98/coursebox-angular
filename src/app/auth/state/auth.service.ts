import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHelper } from 'app/@core/helpers/http.helper';
import { Auth } from './auth';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string;
  resetPwdToken: string;

  constructor(
    private authStore: AuthStore,
    private httpHelper: HttpHelper,
    private authQuery: AuthQuery
  ) {}

  onLogin({ username, password }) {
    const route = '/auth/login';
    const data = { username: username, password: password };
    const storeToken = (res) => (this.token = res['accessToken']);

    return this.httpHelper._postData(route, data, {}, storeToken);
  }

  onLogout() {
    this.authStore.remove((entity) => entity.token === this.token);
  }

  onGetMe() {
    const route = '/user/me';
    const header = { 'access-token': this.token };
    const addMyInfoToState = (response) => {
      const res: Auth = { ...response, token: this.token };
      this.authStore.add(res);
    };

    return this.httpHelper._fetchData(route, header, addMyInfoToState);
  }

  onDeleteAccount() {
    const route = '/user';
    const header = { 'access-token': this.token };
    return this.httpHelper._deleteData(route, header, () => {});
  }

  onRequestPassword(username) {
    const route = '/auth/forgot-password';

    const setResetPwdToken = (res) => {
      const auth: Auth = {
        ...this.authQuery.getAll()[0],
        resetPwdToken: res['resetPwdToken'],
      };
      this.authStore.update((entity) => entity.userId === auth.userId, {
        resetPwdToken: res['resetPwdToken'],
      });
      // this.authStore.add(auth);
    };
    const header = { username: username };
    return this.httpHelper._fetchData(route, header, setResetPwdToken);
  }

  onChangePassword(password: any) {
    const resetPwdToken = this.authQuery.getAll()[0].resetPwdToken;
    console.log('resetPwdToken', resetPwdToken);
    const route = `/auth/reset-password?token=${resetPwdToken}`;
    return this.httpHelper._postData(route, { password: password }, {}, () => {
      console.log('Change password done');
    });
  }
}
