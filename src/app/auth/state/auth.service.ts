import { Injectable } from '@angular/core';
import { HttpHelper } from 'app/@core/helpers/http.helper';
import { Auth } from './auth';
import { AuthQuery } from './auth.query';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string;
  userId$ = this.authQuery.selectFirst((entity) => entity.userId);
  constructor(
    private authStore: AuthStore,
    private httpHelper: HttpHelper,
    private authQuery: AuthQuery
  ) {}

  private getMe(token) {
    const route = '/user/me';
    const header = { 'access-token': token };
    const addMyInfoToState = (response) => {
      const res: Auth = { ...response, token: token };
      this.authStore.add(res);
    };

    return this.httpHelper._fetchData(route, header, addMyInfoToState);
  }

  login({ username, password }) {
    const route = '/auth/login';
    const data = { username: username, password: password };

    return this.httpHelper._postData(route, data, {}, (res) =>
      this.getMe(res['accessToken'])
    );
  }

  logout() {
    this.userId$.subscribe((userId) =>
      this.authStore.remove((entity) => entity.userId === userId)
    );
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
